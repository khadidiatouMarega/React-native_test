import React from 'react';
import { Image,  StyleSheet, Text, View } from 'react-native';
import logo from "../../assets/logo_couleur.png";
export default function Home() {
  console.log("Page Show");
  return (
    <View style={styles.container}>
      <Image source={logo} style={{ width: 605, height: 659 }} /> 
      <View>
      <Text style={{color: 'black', fontSize: 26,width:300}}> 
        Khadidiatou MAREGA
      </Text>
    </View>
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