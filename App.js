import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RootStack from './Login/RootStack';



class App extends React.Component {
  render() { 
    return (  
      <RootStack/>
    );
  }
}
 
export default App;
