import React, { Component } from 'react'
import { View, Text, ImageBackground, Image, TouchableWithoutFeedback } from 'react-native'
import hasNotch from '../../utils/hasNotch'
import assets from './assets'
import styles from './styles'

class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  }

  state = {
    show: false
  }

  handleShow = () => {
    this.setState({
      show: !this.state.show
    })
  }

  render () {
    return (
      <ImageBackground
        source={assets.background}
        imageStyle={{ resizeMode: 'stretch' }}
        style={styles.background}
      >
        <View style={styles.wrapperLogoTripPlanner}>
          <Image source={assets.tripplanner} />
        </View>

        <View style={styles.wrapperLogoDevPleno}>
          <Image source={assets.devpleno} />
        </View>
        {
          !this.state.show
            ? <TouchableWithoutFeedback onPress={this.handleShow}>
              <View style={[ styles.buttonBackground, hasNotch ? { paddingBottom: 32 } : null ]}>
                <Text style={styles.buttonText}>COMEÇAR</Text>
              </View>
            </TouchableWithoutFeedback>
            : <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Trips')}>
              <View style={styles.buttonEmptyStateBackground}>
                <Image source={assets.pin} style={styles.pin} />
                <Text style={styles.buttonEmptyStateText}>Vamos planejar sua primeira viagem?</Text>
                <Image source={assets.arrow} style={[ styles.arrow, hasNotch ? { marginBottom: 16 } : null ]} />
              </View>
            </TouchableWithoutFeedback>
        }

      </ImageBackground>
    )
  }
}

export default HomeScreen
