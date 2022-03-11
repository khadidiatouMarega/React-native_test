import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';

export default function Update() {
  return (
    <View style={styles.container}>
      <Text style={styles.instructions}>
       With Vric à Vrac, life is green!
      </Text>

      <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={{ backgroundColor: 'darkgreen' }}>
        <Text style={{ fontSize: 20, color: '#fffff' }}>You Write ...</Text>
      </TouchableOpacity>
      <TextInput style ={styles.input}
           placeholder=" type your text "
          
        />
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
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  input :{

  }
});