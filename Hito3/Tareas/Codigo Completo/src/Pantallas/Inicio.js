import React, { Component } from "react";
import { View,  Text, Alert } from 'react-native';

import Colores from "./../Config/Colores";
import Button from "./../Componentes/Button";

export default class Actual extends Component {
  render()
  {
    console.disableYellowBox = true;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',  backgroundColor: Colores.azul }}>
        <Text style = {{width: 250, fontSize: 20, margin: 50, textAlign: "center"}}>
          Inicio
        </Text>
        <Button
          texto = "Hola"
          funcion = {()=>{console.log("apreta")}}
          />
      </View>
    );

  }
}
