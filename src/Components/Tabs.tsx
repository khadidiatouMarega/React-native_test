import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Pages/Home';
import Show from '../Pages/Show';
import Update from '../Pages/Update';

const Tab = createBottomTabNavigator();

export default  function Tabs(){
  return (
    <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Update" component={Update} />
    <Tab.Screen name="Show" component={Show} />
  </Tab.Navigator>
  )
}
