import React from 'react';
import {StyleSheet, Text, View } from 'react-native';

export default function Show() {
    console.log("Show Page");
  return (
    <View style={styles.container}>
      <Text style={{color: 'white', fontSize: 26}}> 
        Khadidiatou MAREGA
      </Text>
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