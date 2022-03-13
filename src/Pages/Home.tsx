import React from 'react';
import { Image,  StyleSheet, View } from 'react-native';
import Footer from '../Components/Footer';

export default function Home() {
  console.log("Home Page");
  return (
      <View style={styles.container}>
    <View style={styles.img}>
    <Image  source={require('../../assets/logo_couleur.png')} style={{ width: 300, height: '37%' }} />
    </View>
      <Footer/>
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
  img: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});