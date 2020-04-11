import React, {Component} from "react";
import {StyleSheet, View, Text, TextInput,Image} from "react-native";

import CVCasos from "./CVCasos";

export default class CVCiudad extends Component{
  constructor(props)
  {
    super(props);
  }
  render()
  {
    return (
      <View>
        <Text>{this.props.nombre}</Text>
        <CVCasos
          funcion = {this.props.funcionConfirmados}
          placeholder = {"0"}
          secureTextEntry = {false}
          autoCorrect = {false}
          texto="Casos Confirmados"
          ciudad = {this.props.nombre}
          tipo = "Confirmados"
          >
        </CVCasos>
        <CVCasos
          funcion = {this.props.funcionSospechosos}
          placeholder = {"0"}
          secureTextEntry = {false}
          autoCorrect = {false}
          texto="Casos Sospechosos"
          ciudad = {this.props.nombre}
          tipo = "Sospechosos"
          >
        </CVCasos>
      </View>
    );
  }
}
