import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import hasNotch from '../../utils/hasNotch'
import assets from './assets'
import styles from './styles'

class TripAddScreen extends Component {
  static navigationOptions = {
    header: null
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
          <Text>Trip Add Screen</Text>
        </View>
      </View>
    )
  }
}

export default TripAddScreen
