import React, { Component } from 'react'
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import styles from './styles'
import assets from './assets'

class TripScreen extends Component {
  static navigationOptions = {
    header: null
  }

  renderItem = places => {
    return (
      <View style={styles.wrapperPlacesItem}>
        <View style={styles.wrapperPlacesItemInfo}>
          <Text style={styles.placesItemName}>{places.item.name}</Text>
          <Text>{places.item.description}</Text>
        </View>
        <View style={styles.wrapperPlacesItemPrice}>
          <Text style={styles.placesItemPriceText}>R$ {places.item.price}</Text>
        </View>
      </View>
    )
  }

  render () {
    const trip = {
      title: 'Eurotrip 2019',
      price: 'R$ 5000',
      places: [
        { id: '1', name: 'Amesterdan', description: 'Chegada', price: 5000, lat: 0, long: 0 },
        { id: '2', name: 'XO Hotel', description: 'Hospedagem', price: 1000, lat: 0, long: 0 },
        { id: '3', name: 'Bruxelas', description: 'Chegada', price: 100, lat: 0, long: 0 },
        { id: '4', name: 'Ibis Hotel', description: 'Hospedagem', price: 150, lat: 0, long: 0 },
        { id: '5', name: 'Noruega', description: 'Chegada', price: 130, lat: 0, long: 0 },
        { id: '6', name: 'Hostel', description: 'Hospedagem', price: 40, lat: 0, long: 0 },
        { id: '7', name: 'Luxemburgo', description: 'Chegada', price: 200, lat: 0, long: 0 },
        { id: '8', name: 'Hostel', description: 'Hospedagem', price: 35, lat: 0, long: 0 },
        { id: '9', name: 'França', description: 'Chegada', price: 150, lat: 0, long: 0 },
        { id: '10', name: 'XO Hotel', description: 'Hospedagem', price: 500, lat: 0, long: 0 },
        { id: '11', name: 'Museu do Louvre', description: 'Passeio', price: 200, lat: 0, long: 0 }
      ]
    }

    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <View style={styles.backButton}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image source={assets.arrow} />
            </TouchableOpacity>
          </View>
          <Text style={styles.tripTitle}>TripTitle</Text>
          <Text style={styles.tripPrice}>R$ 5000</Text>
        </View>
        <FlatList
          style={{
            flex: 1
          }}
          contentContainerStyle={{
            paddingTop: 16,
            paddingLeft: 16
          }}
          data={trip.places}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    )
  }
}

export default TripScreen
