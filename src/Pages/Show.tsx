import React from 'react';
import {StyleSheet, Text, View } from 'react-native'; 

export default function Show() {
    console.log("Page Show");
  return (
    <View style={styles.container}>
        {/* console.log(Show page) */}
      {/* <Text style={{color: 'white', fontSize: 26}}> 
        Khadidiatou MAREGA
      </Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});