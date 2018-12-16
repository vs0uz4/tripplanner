import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'stretch'
  },
  wrapperMap: {
    flex: 1,
    paddingBottom: 24
  },
  map: {
    flex: 1
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16
  },
  tripTitle: {
    position: 'absolute',
    bottom: 30,
    left: 6,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 8,
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'left',
    backgroundColor: '#24C6DC'
  },
  tripValue: {
    position: 'absolute',
    bottom: 30,
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
  input: {
    backgroundColor: '#E5E5E5',
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 24,
    padding: 16
  },
  saveButton: {
    backgroundColor: '#E5E5E5',
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 24,
    padding: 16
  },
  saveButtonText: {
    alignSelf: 'center',
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal'
  }
})

export default styles
