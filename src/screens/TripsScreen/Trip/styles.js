import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  wrapperTrip: {
    backgroundColor: 'white',
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16
  },
  wrapperTripImage: {
    backgroundColor: 'gray',
    justifyContent: 'center',
    height: 144,
    marginBottom: 6
  },
  tripImage: {
    flex: 1
  },
  tripTitle: {
    marginBottom: 10,
    fontSize: 12,
    fontWeight: 'normal',
    textAlign: 'left'
  },
  tripPrice: {
    position: 'absolute',
    top: 144 - 16,
    right: 22,
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
