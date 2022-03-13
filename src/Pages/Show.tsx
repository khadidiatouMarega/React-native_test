import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import setMytext from './Update';

export default function Show() {
    console.log("Show Page");
  return (
    <View style={styles.container}>
      <Text>  { setMytext }</Text>
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