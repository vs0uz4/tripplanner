import React, { Component } from 'react'
import { View, Text, FlatList, Image, TouchableOpacity, AsyncStorage } from 'react-native'
import MapView from 'react-native-maps'

import hasNotch from '../../utils/hasNotch'
import Trip from './Trip'
import assets from './assets'
import styles from './styles'

class TripsScreen extends Component {
  static navigationOptions = {
    header: null
  }

  viewabilityConfig = {
    itemVisiblePercentThreshold: 100,
    minimumViewTime: 1
  }

  state = {
    trips: [],
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

  getTrips = async () => {
    const tripsStored = await AsyncStorage.getItem('trips')
    let trips = []
    if (tripsStored) {
      trips = JSON.parse(tripsStored)
    }

    return trips
  }

  loadData = async () => {
    const trips = await this.getTrips()
    this.setState({
      trips
    })
  }

  animateMap = (lat, long) => {
    const latitude = (lat === 0) ? this.state.initialRegion.latitude : lat
    const longitude = (long === 0) ? this.state.initialRegion.longitude : long
    this.map.animateToRegion(this.regionFrom(latitude, longitude, 1000), 2000)
  }

  handleItemChange = info => {
    const { viewableItems } = info
    if (viewableItems && viewableItems.length > 0) {
      const [item] = viewableItems
      this.animateMap(item.item.latitude, item.item.longitude)
    }
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

  clearStorage = async () => {
    await AsyncStorage.clear()
  }

  getCurrentPosition = () => {
    this.watchPosition = navigator.geolocation.getCurrentPosition((position) => {
      let region = this.regionFrom(position.coords.latitude, position.coords.longitude, 1000)
      this.setRegion(region)
    }, (error) => {
      console.log(error)
    })
  }

  componentDidMount () {
    this.getCurrentPosition()
    this.loadData()
  }

  renderItem = trip => {
    return <Trip onPress={() => this.props.navigation.navigate('Trip', { id: trip.item.id, animateMap: this.animateMap, refresh: this.loadData })} title={trip.item.tripTitle} price={trip.item.price} />
  }

  render () {
    const { trips } = this.state

    return (
      <View style={styles.wrapper}>

        <View style={styles.wrapperMap}>
          <MapView
            style={styles.map}
            initialRegion={this.state.initialRegion}
            ref={(ref) => {
              this.map = ref
            }} />

          <View style={styles.addButton}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('TripAdd', { refresh: this.loadData })}>
              <Image source={assets.plus} />
            </TouchableOpacity>
          </View>
          <View style={{
            position: 'absolute',
            bottom: 16,
            left: 16
          }}>
            <TouchableOpacity onPress={this.clearStorage}>
              <Text>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.wrapperTripsList}>
          <FlatList
            data={trips}
            renderItem={this.renderItem}
            horizontal
            pagingEnabled
            keyExtractor={item => item.id.toString()}
            style={[
              hasNotch ? { marginBottom: 16 } : null
            ]}
            viewabilityConfig={this.viewabilityConfig}
            onViewableItemsChanged={this.handleItemChange}
          />
        </View>

      </View>
    )
  }
}

export default TripsScreen
