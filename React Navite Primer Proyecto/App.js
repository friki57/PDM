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

import Input from './src/login/input.js';
import Logo from './src/login/logo.js';
import Cbba from './src/Img/cochabamba.jpg'

const App: () => React$Node = () => {
  return (
    <>
      <View style = {styles.body}>
        <View style = {styles.container}>
          <Logo></Logo>
          <Input
            source={''}
            placeholder = "Username"
            secureTextEntry = {false}
            autoCorrect = {false}
            ></Input>
          <Input
            source={''}
            placeholder = "Password"
            secureTextEntry = {true}
            autoCorrect = {false}
            ></Input>
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
  containers: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center'
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
