import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TextInput} from 'react-native';
import PropTypes from 'prop-types';

export default class Input extends Component {
  constructor(props)
  {
    super(props);
  }

  render() {
    return (
      <View>
        <Image source = {this.props.source} style = {stylesInput.inlineImg}></Image>
        <TextInput style = {stylesInput.input}
          placeholder = {this.props.placeholder}
          secureTextEntry = {this.props.secureTextEntry}
          autoCorrect = {this.props.autoCorrect}
          placeholderTextColor = "#fff"
          underlineColorAndroid = "transparent"
          ></TextInput>
      </View>
    );
 }
}

const stylesInput = StyleSheet.create({
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: 310,
    alignItems: 'center',
    height: 40,
    marginHorizontal: 20,
    paddingLeft: 45,
    borderRadius: 20,
    color: '#ffffff',
    marginBottom: 15
  },
  inlineImg: {
    position: 'absolute',
    zIndex: 99,
    width: 22,
    height: 22,
    left: 35,
    top: 9,
  },
});

Input.propTypes =
{
  source: PropTypes.number.isRequired,
  placeholder: PropTypes.string.isRequired,
  autoCorrect: PropTypes.bool,
  secureTextEntry: PropTypes.bool
}
