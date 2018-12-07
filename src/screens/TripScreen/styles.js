import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  header: {
    backgroundColor: 'grey',
    height: 208
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16
  },
  tripTitle: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'left'
  },
  tripPrice: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 8,
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    backgroundColor: '#24C6DC'
  },
  wrapperPlacesItem: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 16
  },
  wrapperPlacesItemInfo: {
    flex: 1
  },
  placesItemName: {
    fontWeight: '500',
    fontSize: 18,
    textAlign: 'left'
  },
  wrapperPlacesItemPrice: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 16
  },
  placesItemPriceText: {
    textAlign: 'right',
    color: '#24C6DC'
  }
})

export default styles
