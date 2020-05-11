import React, { Component } from "react";
import { View,  Text, Alert } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import imagenes from "./../Config/Imagenes"
import Colores from "./../Config/Colores"

import OnboardingFactory from "./OnboardingFactory";
import Login from "./Login";

class Pantalla1 extends Component {
  render()
  {
    return   (
      <OnboardingFactory
        imagen = {imagenes.img1}
        color = {Colores.verde}
        Titulo = "PDM"
        Descripcion = "Programación de Dispositivos Móviles"
        rutaAdelante = "Pantalla2"
        navigation = {this.props.navigation}
        />
    )
  }
}
class Pantalla2 extends Component {
  render()
  {
    return   (
      <OnboardingFactory
        imagen = {imagenes.img2}
        color = {Colores.naranja}
        Titulo = "DEFENSA HITO 3"
        Descripcion = "Docente: William Barra Gestion 2020"
        rutaAtras = "Pantalla1"
        rutaAdelante = "Pantalla3"
        navigation = {this.props.navigation}
        />
    )
  }
}
class Pantalla3 extends Component {
  render()
  {
    return   (
      <OnboardingFactory
        imagen = {imagenes.img1}
        color = {Colores.azul}
        Titulo = "FIREBASE"
        Descripcion = "Integración de React Native con Firebase"
        rutaAtras = "Pantalla2"
        rutaAdelante = "Login"
        navigation = {this.props.navigation}
        />
    )
  }
}

const Stack = createStackNavigator();
export default class NavegacionPrincipal extends Component {
  render()
  {
    return (
      <NavigationContainer>
        <Stack.Navigator  screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen
            name="Pantalla1"
            component={Pantalla1}
            options={{
              title: "Inicio"
            }}
            />
          <Stack.Screen
            name="Pantalla2"
            component={Pantalla2}
            options={{
              title: "Inicio"
            }}
            />
          <Stack.Screen
            name="Pantalla3"
            component={Pantalla3}
            options={{
              title: "Inicio"
            }}
            />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              title: "Login"
            }}
            />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
