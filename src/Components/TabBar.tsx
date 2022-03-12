import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../Pages/Home';
import Show from '../Pages/Show';
import Update from '../Pages/Update';

const Tab = createBottomTabNavigator();


function MyTabs() {
      return (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Update" component={Update} />
          <Tab.Screen name="Show" component={Show} />
        </Tab.Navigator>
      );
    }
export default MyTabs();