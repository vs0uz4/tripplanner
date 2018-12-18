import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  header: {
    backgroundColor: 'grey',
    justifyContent: 'center',
    height: 210,
    marginBottom: 8
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16
  },
  addButton: {
    position: 'absolute',
    top: 16,
    right: 16
  },
  wrapperFrameImage: {
    justifyContent: 'center'
  },
  frameImage: {
    alignSelf: 'center'
  },
  frameImageText: {
    alignSelf: 'center',
    fontSize: 14,
    fontWeight: '400',
    paddingTop: 10
  },
  tripImage: {
    flex: 1
  },
  tripTitle: {
    position: 'absolute',
    bottom: 6,
    left: 0,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 8,
    textAlign: 'left',
    fontSize: 14,
    fontWeight: '500',
    backgroundColor: 'rgba(36, 198, 220, 0.7)'
  },
  tripPrice: {
    position: 'absolute',
    bottom: 6,
    right: 6,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 8,
    textAlign: 'center',
    fontSize: 14,
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
    fontSize: 14,
    textAlign: 'left'
  },
  placesItemDescription: {
    fontWeight: '500',
    fontSize: 12,
    textAlign: 'left'
  },
  wrapperPlacesItemPrice: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 16
  },
  placesItemPriceText: {
    fontSize: 14,
    textAlign: 'right',
    color: '#24C6DC'
  }
})

export default styles
