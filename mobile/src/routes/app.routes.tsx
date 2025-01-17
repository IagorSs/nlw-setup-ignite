import { createNativeStackNavigator } from '@react-navigation/native-stack'

const { Navigator, Screen } = createNativeStackNavigator()

import Habit from '../screens/Habit'
import New from '../screens/New'
import Home from '../screens/Home'

export default function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name="home"
        component={Home}
      />
      <Screen
        name="new"
        component={New}
      />
      <Screen
        name="habit"
        component={Habit}
      />
    </Navigator>
  )
}
