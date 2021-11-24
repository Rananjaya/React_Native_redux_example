import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FirstScreen from './FIrstScreen';
import { Provider } from 'react-redux';
import { Store } from './redux/store';
const App = () => {
  return (
    <View style={{flex:1}}>
      <Provider store={Store}>
         <FirstScreen/>
      </Provider>
    
    </View>
  )
}

export default App

const styles = StyleSheet.create({})
