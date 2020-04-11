import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity, Button, ToastAndroid} from 'react-native';


export default class Boton extends Component {
  constructor(props)
  {
    super(props);
  }

  render() {
    return (
      <View>
        <TouchableOpacity style = {stylesButton.container}
          onPress={this.props._onPress}>
          <Text style = {stylesButton.text}>{this.props.titulo}</Text>
        </TouchableOpacity>

      </View>
    );
 }
}

const stylesButton = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#74e",
    marginBottom: 12,
    paddingVertical: 12,
    borderRadius: 5,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(255,255,255,0.7)',
  },
  text: {
    color: "#fff",
    textAlign: 'center',
    height: 20,
  },
});
