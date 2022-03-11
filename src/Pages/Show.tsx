import React from 'react';
import {StyleSheet, Text, View } from 'react-native'; 

export default function Show() {
  return (
    <View style={styles.container}>

      <Text style={{color: '#888', fontSize: 26}}> 
        Khadidiatou MAREGA
      </Text>
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