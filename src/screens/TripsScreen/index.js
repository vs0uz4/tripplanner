import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import Trip from './Trip'
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
          <Text>Mapa</Text>
        </View>

        <View style={styles.wrapperTripsList}>
          <FlatList
            data={trips}
            renderItem={this.renderItem}
            horizontal
            pagingEnabled
            keyExtractor={item => item.id}
          />
        </View>

      </View>
    )
  }
}

export default TripsScreen
