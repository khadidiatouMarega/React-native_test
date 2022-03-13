import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';

const Update = () =>{

  console.log("Page update");
  const [text, setText] = useState("With Vric à Vrac, life is green!");
  const [mytext, setMytext] = useState("");

// console.log(getData(data));
  function handleSubmit(){
    if(mytext){
      setText(mytext)
  }
  }
  return (
    <View style={styles.container}>
      <Text>  { text }</Text>
      <TextInput style ={styles.input}
           placeholder=" type your  message " 
           onChangeText={mytext=>setText(mytext)}
        />
        
      <TouchableOpacity
         onPress={()=> handleSubmit}
          style={{ backgroundColor: 'darkgreen' }}>
          <Text style={{ fontSize: 20, color: 'black', 
           borderRadius: 10, }}>Show message:</Text>
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
    marginTop: 25,
    marginBottom:  15,
    color: 'black',
    fontSize: 18,
  }

});
export default Update;