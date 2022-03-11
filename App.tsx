import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/Pages/Home';
import Show from './src/Pages/Show';
import Update from './src/Pages/Update';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Home/> */}
      <Update/>
      {/* <Show/> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
