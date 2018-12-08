import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import hasNotch from '../../utils/hasNotch'
import assets from './assets'
import styles from './styles'

class PointAddScreen extends Component {
  static navigationOptions = {
    header: null
  }

  render () {
    return (
      <View style={styles.wrapper}>
        <View style={styles.wrapperMap}>
          <View style={[styles.backButton, hasNotch ? { paddingTop: 16 } : null]}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image source={assets.arrow} />
            </TouchableOpacity>
          </View>
          <Text>Mapa</Text>
        </View>
        <View>
          <Text>Point Add Screen</Text>
        </View>
      </View>
    )
  }
}

export default PointAddScreen
