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
  uploadButton: {
    alignSelf: 'flex-end',
    top: 16,
    right: 16
  },
  wrapperFrameImage: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  frameImageText: {
    fontSize: 14,
    fontWeight: '400',
    paddingTop: 10
  }
})

export default styles
