import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';

import Colores from './../Config/Colores';

const Button = ({texto, funcion}) => {

    return (
      <TouchableOpacity style={styles.button} onPress={funcion}>
        <Text style={styles.text}>{texto}</Text>
      </TouchableOpacity>
    );

};

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colores.trasparente,
    borderColor: Colores.blanco,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10
  },
  text: {
    width: 150,
    color: Colores.blanco,
    textAlign: 'center',
    fontWeight: 'bold',
    height: 20,
  },
});

export default Button;
