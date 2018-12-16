import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, AsyncStorage } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { TextInput } from 'react-native-gesture-handler'

import hasNotch from '../../utils/hasNotch'
import assets from './assets'
import styles from './styles'

class PointAddScreen extends Component {
  static navigationOptions = {
    header: null
  }

  state = {
    pointId: new Date().getTime(),
    pointName: '',
    pointDescription: '',
    pointPrice: 0,
    position: {
      latitude: 59.371571,
      longitude: 16.511565
    },
    initialRegion: {
      latitude: -22.9005452,
      longitude: -43.195671,
      latitudeDelta: 0.00922 * 1.5,
      longitudeDelta: 0.00421 * 1.5
    }
  }

  setRegion (region) {
    this.setState({
      initialRegion: region
    })
  }

  regionFrom = (lat, lon, distance) => {
    distance = distance / 2
    const circumference = 40075
    const oneDegreeOfLatitudeInMeters = 111.32 * 1000
    const angularDistance = distance / circumference

    const latitudeDelta = distance / oneDegreeOfLatitudeInMeters
    const longitudeDelta = Math.abs(Math.atan2(
      Math.sin(angularDistance) * Math.cos(lat),
      Math.cos(angularDistance) - Math.sin(lat) * Math.sin(lat)))

    const result = {
      latitude: lat,
      longitude: lon,
      latitudeDelta,
      longitudeDelta
    }

    return result
  }

  getCurrentPosition = () => {
    this.watchPosition = navigator.geolocation.getCurrentPosition((position) => {
      let region = this.regionFrom(position.coords.latitude, position.coords.longitude, 1000)
      this.setRegion(region)
    }, (error) => {
      console.log(error)
    })
  }

  getTrips = async () => {
    const tripsStored = await AsyncStorage.getItem('trips')
    let trips = []
    if (tripsStored) {
      trips = JSON.parse(tripsStored)
    }

    return trips
  }

  setTrips = async (trips) => {
    await AsyncStorage.setItem('trips', JSON.stringify(trips))
  }

  getPointsByTripId = async (tripId) => {
    const pointsStored = await AsyncStorage.getItem('trip-' + tripId)
    let points = []
    if (pointsStored) {
      points = JSON.parse(pointsStored)
    }

    return points
  }

  setPointsOfTrip = async (tripId, points) => {
    await AsyncStorage.setItem('trip-' + tripId, JSON.stringify(points))
  }

  handleSave = async () => {
    const id = this.props.navigation.state.params.trip.id

    const points = await this.getPointsByTripId(id)
    points.push(this.state)

    await this.setPointsOfTrip(id, points)

    let total = 0
    points.forEach(point => {
      total += point.pointPrice
    })

    const trips = await this.getTrips()
    trips.forEach((trip, index) => {
      if (trip.id === id) {
        trips[index].price = total
        trips[index].latitude = points[0].position.latitude
        trips[index].longitude = points[0].position.longitude
      }
    })
    await this.setTrips(trips)

    this.props.navigation.state.params.refresh()
    this.props.navigation.goBack()
  }

  loadData = async () => {
    const trip = this.props.navigation.state.params.trip
    const points = await this.getPointsByTripId(trip.id)

    if (points && points.length > 0) {
      const initialPoint = points[(points.length - 1)]
      let region = this.regionFrom(initialPoint.position.latitude, initialPoint.position.longitude, 1000)
      this.setRegion(region)
    } else {
      this.getCurrentPosition()
    }
  }

  componentDidMount () {
    this.loadData()
  }

  render () {
    const trip = this.props.navigation.state.params.trip

    return (
      <View style={styles.wrapper}>

        <View style={styles.wrapperMap}>
          <MapView
            style={styles.map}
            initialRegion={this.state.initialRegion}>
            <Marker
              onDragEnd={(evt) => {
                this.setState({
                  position: {
                    latitude: evt.nativeEvent.coordinate.latitude,
                    longitude: evt.nativeEvent.coordinate.longitude
                  }
                })
              }}
              draggable
              coordinate={{
                latitude: this.state.initialRegion.latitude,
                longitude: this.state.initialRegion.longitude
              }} />
          </MapView>

          <View style={[styles.backButton, hasNotch ? { paddingTop: 16 } : null]}>
            <TouchableOpacity onPress={() => {
              this.props.navigation.state.params.refresh()
              this.props.navigation.goBack()
            }}>
              <Image source={assets.arrow} />
            </TouchableOpacity>
          </View>
          <Text style={styles.tripTitle}>{trip.tripTitle}</Text>
          <Text style={styles.tripValue}>R$ {parseFloat(trip.price).toFixed(2)}</Text>
        </View>

        <View>
          <TextInput style={styles.input} placeholder='Nome do Ponto' onChangeText={(txt) => this.setState({ pointName: txt })} />
          <TextInput style={styles.input} placeholder='Descrição' onChangeText={(txt) => this.setState({ pointDescription: txt })} />
          <TextInput style={styles.input} placeholder='Valor R$' onChangeText={(txt) => this.setState({ pointPrice: parseFloat(txt) })} />
          <TouchableOpacity style={styles.saveButton} onPress={this.handleSave}>
            <Text style={styles.saveButtonText}>SALVAR</Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }
}

export default PointAddScreen
