/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Componente from './src/test/componente.js';
import Logo from './src/login/logo.js';

const App: () => React$Node = () => {
  return (
    <>
      <View style = {styles.body}>
        <View style = {styles.container}>
          <Componente style = {styles.box} nombre = "Puma"></Componente>
          <Logo style = {styles.box}></Logo>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body:
  {
    flex:1,
    flexDirection: "column",
    backgroundColor: Colors.primary
  },
  container:
  {
    flex: .5,
    flexDirection: 'column',
    alignItems: 'center'
  },
  box: {
    height: 100
  }
});

export default App;
