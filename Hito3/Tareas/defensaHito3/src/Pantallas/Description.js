import React, { Component } from "react";
import { View,  Text, Alert,  StyleSheet, Image } from 'react-native';

import Colores from "./../Config/Colores";


export default class Actual extends Component {
  constructor(props){
    super(props);
  }
  render()
  {
    console.disableYellowBox = true;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={this.props.imagen} style={{width: 400, height: 450, alignSelf: 'flex-end', marginBottom: 0, marginRight: -100}}/>
        <Text style = {{width: 250, fontSize: 30, margin: 10, textAlign: "center", color : Colores.blanco}}>
          {this.props.Titulo}
        </Text>
        <Text style = {{width: 250, fontSize: 20, margin: 10, textAlign: "center", color : Colores.blanco}}>
          {this.props.Descripcion}
        </Text>
      </View>
    )
  }
}
