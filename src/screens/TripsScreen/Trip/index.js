import React from 'react'
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native'

import styles from './styles'

const Trip = props => {
  const dimension = Dimensions.get('window')

  return (
    <TouchableOpacity onPress={props.onPress} style={styles.wrapperTrip}>
      <View style={[styles.wrapperTripImage, { width: dimension.width - 32 }]}>
        <Image resizeMode='cover' style={styles.tripImage} source={props.image} />
      </View>
      <Text style={styles.tripTitle}>{ props.title }</Text>
      <Text style={styles.tripPrice}>R$ { props.price.toFixed(2) }</Text>
    </TouchableOpacity>
  )
}

export default Trip
