import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {StyleSheet, Text, View } from 'react-native'; 
import Home from './Pages/Home';
import Update from './Pages/Update';
import Show from './Pages/Show';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export default function LesRoutes(){
  return (
    <View>
      <Router>
            <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/update' element={<Update/>}/>
            <Route path='/show' element={<Show/>}/>
        </Routes>
      </Router>
    </View>
  );
}
