import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './src/screens/HomeScreen'
import TripsScreen from './src/screens/TripsScreen'
import TripScreen from './src/screens/TripScreen'
import TripAddScreen from './src/screens/TripAddScreen'
import PointAddScreen from './src/screens/PointAddScreen'

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Trips: TripsScreen,
  TripAdd: TripAddScreen,
  Trip: TripScreen,
  PointAdd: PointAddScreen
}, {
  initialRouteName: 'Home'
})
export default createAppContainer(AppNavigator)
