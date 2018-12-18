import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  header: {
    backgroundColor: 'grey',
    justifyContent: 'center',
    height: 210,
    marginBottom: 24
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16
  },
  uploadButton: {
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
