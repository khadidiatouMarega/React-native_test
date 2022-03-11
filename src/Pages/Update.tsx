import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';

export default function Update() {

  console.log("Page update");
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);

  function getData(val){
      setData(val.target.value);
      console.warn(val.target.value);
  } 
  return (
    <View style={styles.container}>
      <Text style={styles.instructions}>
       With Vric à Vrac, life is green!{
          print?
          <View>{data}</View>
          :null
        }
      </Text>
      <TextInput style ={styles.input}
           placeholder=" type your text " onChange={getData}
        />
        
        <TouchableOpacity
          onPress={() => setPrint(true)}
          style={{ backgroundColor: 'darkgreen' }}>
          <Text style={{ fontSize: 20, color: 'black', 
           borderRadius: 10, }}>You Wrote :</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b6eea4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
  },
  instructions: {
    color: 'black',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  input :{
    borderWidth:  2, 
    borderStyle:  'solid',
    borderRadius: 3,
    margintop: 25,
    marginBottom:  15,
    color: 'black',
    fontSize: 18,
  }
});