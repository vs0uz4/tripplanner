import React, { Component } from 'react'
import { View, Text, Image, ImageBackground, TouchableOpacity, AsyncStorage } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import ImagePicker from 'react-native-image-picker'

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
    tripImage: null,
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

  handleImageSelect = () => {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    }

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response)

      if (response.didCancel) {
        console.log('User cancelled photo picker')
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton)
      } else {
        let source = { uri: response.uri }

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          tripImage: source
        })
      }
    })
  }

  handleSave = async () => {
    const trip = {
      id: new Date().getTime(),
      tripTitle: this.state.tripTitle,
      tripImage: this.state.tripImage,
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
          {
            this.state.tripImage === null
              ? (
                <View styles={[ styles.wrapperFrameImage, { alignItems: 'center' } ]}>
                  <Image style={styles.frameImage} source={assets.frameImage} />
                  <Text style={styles.frameImageText}>ADICIONE UMA IMAGEM</Text>
                </View>
              ) : (
                <View style={[ styles.wrapperFrameImage, { flex: 1, alignItems: 'stretch' } ]}>
                  <Image resizeMode='cover' style={styles.tripImage} source={this.state.tripImage} />
                </View>
              )
          }

          <View style={[styles.backButton, hasNotch ? { paddingTop: 16 } : null]}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image source={assets.arrow} />
            </TouchableOpacity>
          </View>

          <View style={[styles.uploadButton, hasNotch ? { paddingTop: 16 } : null]}>
            <TouchableOpacity onPress={this.handleImageSelect}>
              <Image source={assets.upload} />
            </TouchableOpacity>
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
