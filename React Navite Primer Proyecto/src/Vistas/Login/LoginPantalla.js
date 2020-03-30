import React, {Component} from 'react';
import {StyleSheet, View, Text, ToastAndroid} from 'react-native';
import Colors from "./../../Config/Colors"
import Constantes from "./../../Config/Constantes"

import Logo from "./../../Componentes/login/Logo.js"
import TextInput from "./../../Componentes/login/TextInput.js"
import Boton from "./../../Componentes/login/Boton.js"

import cochabamba from "./../../Img/cochabamba.jpg"
import mapasInteractivos from "./../../Img/mapasInteractivos.png"

export default class LoginPantalla extends Component {
  constructor(props)
  {
    super(props);
    this.state =
    {
      user: "",
      pass: ""
    }
    this._onPress = this._onPress.bind(this);
    this._onChangeTextUsername = this._onChangeTextUsername.bind(this);
    this._onChangeTextPassword = this._onChangeTextPassword.bind(this);
  }
  _onPress()
  {
    console.log("Presionado");
    ToastAndroid.show("Presionado\nUser: " + this.state.user + "\nPass: " + this.state.pass, ToastAndroid.SHORT);
    console.log(this.state.user)
    console.log(this.state.pass)
  }
  _onChangeTextUsername(user)
  {
    this.setState({
      user
    })
  }
  _onChangeTextPassword(pass)
  {
    this.setState({
      pass
    })
  }
  render() {
    return (
      <View style = {stylesLoginScreen.container}>
        <Logo style = {stylesLoginScreen.logo}></Logo>
        <View style = {stylesLoginScreen.form}>
          <TextInput
            onChangeText = {this._onChangeTextUsername}
            placeholder = {Constantes.USERNAME}
            secureTextEntry = {false}
            autoCorrect = {false}
            source = {mapasInteractivos}
            />
          <TextInput
            onChangeText = {this._onChangeTextPassword}
            placeholder = {Constantes.PASSWORD}
            secureTextEntry = {true}
            autoCorrect = {false}
            source = {cochabamba}
            />
          <Boton
            titulo = {Constantes.TITLE_BUTTON}
            _onPress={this._onPress}
            />
        </View>
      </View>
    );
 }
}

const stylesLoginScreen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blue,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    flex: 1,
    width: '100%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    width: '80%',
  },
});
