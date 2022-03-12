import React from 'react';
import { Image,  StyleSheet, View } from 'react-native';
import logo from '../../assets/logo_couleur.png' ;
import Footer from '../Components/Footer';
export default function Home() {
  console.log("Page Show");
  return (
    <View style={styles.container}>
      <Image source={logo} style={{ width: 605, height: 659 }} /> 
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
});