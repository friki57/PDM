import React, {Component} from "react";
import {StyleSheet, View, Text, TextInput,Image} from "react-native";
import PropTypes from "prop-types";

export default class CVCasos extends Component{
  constructor(props)
  {
    super(props);
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
          onChangeText = {this.props.funcion}
          ></TextInput>
      </View>
    );
  }
}
const stylesTextInput = StyleSheet.create({
  textInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    alignItems: 'center',
    height: 20,
    borderColor: "#999",
    paddingLeft: 40,
    borderRadius: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 20,
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
