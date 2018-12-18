import React from 'react'
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native'

import styles from './styles'

const Trip = props => {
  const dimension = Dimensions.get('window')

  return (
    <TouchableOpacity onPress={props.onPress} style={styles.wrapperTrip}>
      <View style={[styles.wrapperTripImage, { width: dimension.width - 32 }]}>
        {
          props.image === null
            ? (
              <View styles={{
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Image style={{
                  alignSelf: 'center'
                }} source={require('../../../../assets/no_image_icon_black.png')} />
                <Text style={{
                  alignSelf: 'center',
                  fontSize: 12,
                  fontWeight: '400',
                  paddingTop: 10
                }}>NENHUMA IMAGEM ADICIONADA</Text>
              </View>
            ) : (
              <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'stretch'
              }}>
                <Image resizeMode='cover' style={{
                  flex: 1
                }} source={props.image} />
              </View>
            )
        }
      </View>
      <Text style={styles.tripTitle}>{ props.title }</Text>
      <Text style={styles.tripPrice}>R$ { props.price.toFixed(2) }</Text>
    </TouchableOpacity>
  )
}

export default Trip
