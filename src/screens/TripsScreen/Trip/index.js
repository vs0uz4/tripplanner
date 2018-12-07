import React from 'react'
import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import styles from './styles'

const Trip = props => {
  const dimension = Dimensions.get('window')

  return (
    <TouchableOpacity onPress={props.onPress} style={styles.wrapperTrip}>
      <View style={[styles.tripImage, { width: dimension.width - 32 }]}>
        <Text>Trip Image</Text>
      </View>
      <Text style={styles.tripTitle}>{ props.title }</Text>
      <Text style={styles.tripPrice}>{ props.price }</Text>
    </TouchableOpacity>
  )
}

export default Trip
