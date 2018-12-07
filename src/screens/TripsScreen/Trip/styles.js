import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  wrapperTrip: {
    backgroundColor: 'white',
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16
  },
  tripImage: {
    backgroundColor: 'green',
    height: 144,
    marginBottom: 6
  },
  tripTitle: {
    marginBottom: 10,
    fontSize: 12,
    fontWeight: 'normal',
    textAlign: 'left'
  },
  tripPrice: {
    position: 'absolute',
    top: 144 - 26,
    right: 32,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 8,
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    backgroundColor: '#24C6DC'
  }
})

export default styles
