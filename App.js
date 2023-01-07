/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React,{useState,useEffect} from 'react';
import type {Node} from 'react';
import UpPokedex from './app/components/upside';
import DownPokedex from './app/components/downside';
import {
  StyleSheet,
  View,
} from 'react-native';
const App: () => Node = () => {
const [valores,setValores]=useState('');
  return (
    <View style={styles.Box}>
      <DownPokedex pokeinfo={setValores}/>
      <UpPokedex pokeInfo={valores}/>
    </View>
  );
};
const styles = StyleSheet.create({
  Box:{
    width:410,
    height:900,
    backgroundColor:'crimson'
  }
});

export default App;

