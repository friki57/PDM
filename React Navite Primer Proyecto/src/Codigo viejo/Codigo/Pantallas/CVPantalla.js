import React, {Component} from 'react';
import {StyleSheet, View, Text, ToastAndroid} from 'react-native';

import CVCasos from "../Componentes/CVCasos"
import CVCiudad from "./../Componentes/CVCiudad"
import CVLogo from "../Componentes/CVLogo"
import Boton from "../Componentes/Boton"

export default class CVPantalla extends Component {
  constructor(props)
  {
    super(props);
    this.CambioCasos = this.CambioCasos.bind(this);
  }
  CambioCasos()
  {
    console.log("Caso")
  }
  render() {
    return (
      <View style = {stylesLoginScreen.container}>
        <CVLogo style = {stylesLoginScreen.logo}></CVLogo>
        <View style = {stylesLoginScreen.form}>
          <CVCiudad
            nombre = "Cochabamba"
            funcionConfirmados = {this.CambioCasos}
            funcionSospechosos = {this.CambioCasos}
            />
          <CVCiudad
            nombre = "Santa Cruz"
            funcionConfirmados = {this.CambioCasos}
            funcionSospechosos = {this.CambioCasos}
            />
          <CVCiudad
            nombre = "Oruro"
            funcionConfirmados = {this.CambioCasos}
            funcionSospechosos = {this.CambioCasos}
            />
          <Boton
            titulo = "Calcular"
            _onPress={this.CambioCasos}
            />
        </View>
      </View>
    );
 }
}

const stylesLoginScreen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#469",
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    flex: .5,
    width: '100%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    width: '80%'
  },
});
