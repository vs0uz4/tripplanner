import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, AsyncStorage } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

import hasNotch from '../../utils/hasNotch'
import assets from './assets'
import styles from './styles'

class TripAddScreen extends Component {
  static navigationOptions = {
    header: null
  }

  state = {
    id: 0,
    tripTitle: '',
    price: 0,
    latitude: 0,
    longitude: 0
  }

  tripUpdate = txt => {
    this.setState({ tripTitle: txt })
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

  handleSave = async () => {
    const trip = {
      id: new Date().getTime(),
      tripTitle: this.state.tripTitle,
      price: 0,
      latitude: 0,
      longitude: 0
    }

    const trips = await this.getTrips()
    trips.push(trip)
    await this.setTrips(trips)

    this.props.navigation.state.params.refresh()
    this.props.navigation.goBack()
  }

  render () {
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <View style={[styles.backButton, hasNotch ? { paddingTop: 16 } : null]}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image source={assets.arrow} />
            </TouchableOpacity>
          </View>
          <View style={[styles.uploadButton, hasNotch ? { paddingTop: 16 } : null]}>
            <Image source={assets.upload} />
          </View>
          <View style={styles.wrapperFrameImage}>
            <Image source={assets.frameImage} />
            <Text style={styles.frameImageText}>ADICIONE UMA IMAGEM</Text>
          </View>
        </View>
        <View>
          <TextInput style={styles.input} placeholder='Título da Viagem' onChangeText={this.tripUpdate} />
          <TouchableOpacity onPress={this.handleSave} style={styles.saveButton}>
            <Text style={styles.saveButtonText}>SALVAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default TripAddScreen
