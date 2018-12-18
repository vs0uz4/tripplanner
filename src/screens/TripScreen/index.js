import React, { Component } from 'react'
import { View, Text, Image, FlatList, TouchableOpacity, AsyncStorage } from 'react-native'

import hasNotch from '../../utils/hasNotch'
import styles from './styles'
import assets from './assets'

class TripScreen extends Component {
  static navigationOptions = {
    header: null
  }

  state = {
    trip: [],
    points: []
  }

  getTrips = async () => {
    const tripsStored = await AsyncStorage.getItem('trips')
    let trips = []
    if (tripsStored) {
      trips = JSON.parse(tripsStored)
    }

    return trips
  }

  getPointsByTripId = async (tripId) => {
    const pointsStored = await AsyncStorage.getItem('trip-' + tripId)
    let points = []
    if (pointsStored) {
      points = JSON.parse(pointsStored)
    }

    return points
  }

  loadData = async () => {
    const id = this.props.navigation.state.params.id
    const trips = await this.getTrips()
    const points = await this.getPointsByTripId(id)

    let trip = {
      id: 0,
      tripTitle: '',
      tripImage: null,
      price: 0,
      latitude: 0,
      longitude: 0
    }
    trips.forEach(t => {
      if (t.id === id) {
        trip = t
      }
    })

    this.setState({
      trip: trip,
      points: points
    })

    console.log('state:', this.state)
  }

  componentDidMount () {
    this.loadData()
  }

  renderItem = places => {
    return (
      <View style={styles.wrapperPlacesItem}>
        <View style={styles.wrapperPlacesItemInfo}>
          <Text style={styles.placesItemName}>{places.item.pointName}</Text>
          <Text>{places.item.pointDescription}</Text>
        </View>
        <View style={styles.wrapperPlacesItemPrice}>
          <Text style={styles.placesItemPriceText}>R$ {places.item.pointPrice.toFixed(2)}</Text>
        </View>
      </View>
    )
  }

  render () {
    const { trip, points } = this.state

    console.log('state:', this.state)

    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>

          <Image resizeMode='cover' style={{ flex: 1 }} source={trip.tripImage} />

          <View style={[styles.backButton, hasNotch ? { paddingTop: 16 } : null]}>
            <TouchableOpacity onPress={() => {
              this.props.navigation.state.params.refresh()
              this.props.navigation.state.params.animateMap(trip.latitude, trip.longitude)
              this.props.navigation.goBack()
            }}>
              <Image source={assets.arrow} />
            </TouchableOpacity>
          </View>

          <View style={[styles.addButton, hasNotch ? { paddingTop: 16 } : null]}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('PointAdd', { trip: trip, refresh: this.loadData })}>
              <Image source={assets.plus} />
            </TouchableOpacity>
          </View>

          <Text style={styles.tripTitle}>{trip.tripTitle}</Text>
          <Text style={styles.tripPrice}>R$ {parseFloat(trip.price).toFixed(2)}</Text>
        </View>
        <FlatList
          style={{
            flex: 1
          }}
          contentContainerStyle={{
            paddingTop: 16,
            paddingLeft: 16
          }}
          data={points}
          renderItem={this.renderItem}
          keyExtractor={item => item.pointId.toString()}
        />
      </View>
    )
  }
}

export default TripScreen
