import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Home from './src/Pages/Home';
import Show from './src/Pages/Show';
import Update from './src/Pages/Update';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// function HomeScreen({ navigation }) {
//   return (
    
//     <View style={styles.container}>
//       <View>
//        {/* <Image style={styles.tinyLogo} source={require('./assets/snapicone.png')} /> */}
//        </View>
//        <Button
//         title="Update"
//         onPress={() => navigation.navigate('Home')}
//       />
//       <Button
//         title="Update"
//         onPress={() => navigation.navigate('Update')}
//       />
//       <Button
//         title="Show" 
//         onPress={() => navigation.navigate('Show')}
//       />
//     </View>
//   );
// }

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

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Update" component={Update} />
        <Stack.Screen name="Show" component={Show} />
      </Stack.Navigator>
      <StatusBar style="auto" />
      </NavigationContainer>
      {/* <Button
        title="Update"
        onPress={() => navigation.navigate('Update')}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#b6eea4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
