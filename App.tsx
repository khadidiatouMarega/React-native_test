import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer} from '@react-navigation/native';
import Tabs from './src/Components/Tabs';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
      <NavigationContainer>
      <Tabs/>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
