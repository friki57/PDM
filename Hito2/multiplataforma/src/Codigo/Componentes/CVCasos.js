import React, {Component} from "react";
import {StyleSheet, View, Text, TextInput, Image} from "react-native";
import PropTypes from "prop-types";

export default class CVCasos extends Component{
  constructor(props)
  {
    super(props);
    this.Escribir = this.Escribir.bind(this);
  }
  Escribir (texto)
  {
    var datos =
    {
      ciudad: this.props.ciudad,
      tipo: this.props.tipo,
      cant: texto
    }
    datos.nombre = [datos.ciudad,datos.tipo].join("_")
    this.props.funcion(datos);
  }

  render()
  {
    return (
      <View>
        <Text>{this.props.texto}</Text>
        <TextInput
          style = {stylesTextInput.textInput}
          placeholder = {this.props.placeholder}
          secureTextEntry = {this.props.secureTextEntry}
          autoCorrect = {this.props.autoCorrect}
          placeholderTextColor = "#fff"
          underlineColorAndroid = "transparent"
          onChangeText = {this.Escribir}
          ></TextInput>
      </View>
    );

  }
}
const stylesTextInput = StyleSheet.create({
  textInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    alignItems: 'center',
    borderColor: "#999",
    paddingLeft: 40,
    borderRadius: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 10,

    height: 40
  },
  inlineImg: {
    position: 'absolute',
    zIndex: 99,
    width: 22,
    height: 22,
    left: 10,
    top: 9,
  },
});
CVCasos.propTypes =
{
  source: PropTypes.number.isRequired,
  placeholder: PropTypes.string.isRequired,
  autoCorrect: PropTypes.bool,
  secureTextEntry: PropTypes.bool
}
