import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import imgLogo from '../../Recursos/cochabamba.jpg';

export default class componente extends Component {
  constructor(props)
  {
    super(props);
  }

  render() {
    return (
      <View style = {styles.container}>
        <Image source = {imgLogo} style = {styles.image}></Image>
        <Text style = {styles.text}>
          Epidemia Corona Virus
        </Text>
      </View>
    );
 }
}


const styles = StyleSheet.create(
  {
    container: {
      alignItems: "center",
      justifyContent: 'center'
    },
    image:
    {
      marginTop: 300,
      width: 80,
      height: 80
    },
    text: {
      color: "black",
      fontWeight: 'bold',
      backgroundColor: '#eee',
      marginTop: 20
    }
  }
)
