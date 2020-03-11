import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class componente extends Component {
  constructor(props)
  {
    super(props);
  }

  render() {
    var pic = {
      uri: 'https://www.cocinista.es/download/bancorecursos/recetas/chorizo-argentino2.jpg'
    };
    return (
      <View>
        <Text> {this.props.nombre} vales Chorizo </Text>
        <Image source={pic} style={{width: 193, height: 110}}/>
      </View>
    );
 }
}
