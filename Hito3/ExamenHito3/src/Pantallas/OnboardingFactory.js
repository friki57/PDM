import React, { Component } from "react";
import { View,  Text, Alert } from 'react-native';

import Colores from "./../Config/Colores";
import Button from "./../Componentes/Button";
import Description from "./Description";
import ButtonsFotter from "./../Componentes/ButtonsFotter";

export default class Actual extends Component {
  render()
  {
    console.disableYellowBox = true;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',  backgroundColor: this.props.color }}>
        <Description
          imagen = {this.props.imagen}
          color = {this.props.color}
          Titulo = {this.props.Titulo}
          Descripcion = {this.props.Descripcion}
        />
        <ButtonsFotter
          navigation = {this.props.navigation}
          atras = {this.props.rutaAtras}
          adelante = {this.props.rutaAdelante}
          ></ButtonsFotter>
      </View>
    );

  }
}
