import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Pages/Home';
import Show from '../Pages/Show';
import Update from '../Pages/Update';

const Tab = createBottomTabNavigator();

export default  function Tabs(){
  return (
    <Tab.Navigator>
    <Tab.Screen name="home" component={Home} />
    <Tab.Screen name="update" component={Update} />
    <Tab.Screen name="show" component={Show} />
  </Tab.Navigator>
  )
}
