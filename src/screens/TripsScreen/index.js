import React, { Component } from 'react'
import { View, FlatList, Image, TouchableOpacity } from 'react-native'
import MapView from 'react-native-maps'
import hasNotch from '../../utils/hasNotch'
import Trip from './Trip'
import assets from './assets'
import styles from './styles'

class TripsScreen extends Component {
  static navigationOptions = {
    header: null
  }

  renderItem = trip => {
    return <Trip onPress={() => this.props.navigation.navigate('Trip')} title={trip.item.title} price={trip.item.price} />
  }

  render () {
    const trips = [
      { id: '1', title: 'Eurotrip 2019', price: 'R$ 5000' },
      { id: '2', title: 'Expedição Atacama', price: 'R$ 3000' },
      { id: '3', title: 'Mergulho em Noronha', price: 'R$ 7000' }
    ]

    return (
      <View style={styles.wrapper}>

        <View style={styles.wrapperMap}>
          <MapView
            style={styles.map}
            region={{
              latitude: 59.371571,
              longitude: 16.511565,
              latitudeDelta: 0.035,
              longitudeDelta: 0.0121
            }}
          />

          <View style={styles.addButton}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('TripAdd')}>
              <Image source={assets.plus} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.wrapperTripsList}>
          <FlatList
            data={trips}
            renderItem={this.renderItem}
            horizontal
            pagingEnabled
            keyExtractor={item => item.id}
            style={[
              hasNotch ? { marginBottom: 16 } : null
            ]}
          />
        </View>

      </View>
    )
  }
}

export default TripsScreen
