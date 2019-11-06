/**
 * Vídeo #5:Switch - Módulo 11 - React Native Intermediário - B7Web
 * Link para a documentação oficial: https://facebook.github.io/react-native/docs/scrollview
 */

import React, {Component} from 'react';
import {View, StyleSheet, Text, Switch} from 'react-native';

export default class SwitchExemplo extends Component{

  constructor(props){
    super(props);
    this.state = {
      valor:false
    };
  }

  render(){
    return(
        <View style={styles.body}>
          <Switch value={this.state.valor} onValueChange={(v) => this.setState({valor:v})} />
          <Text style={styles.texto}>{this.state.valor?'Selecionado':'Não Selecionado'}</Text>
        </View>
    );
  }

}//fim classe

const styles = StyleSheet.create({
  body:{
    padding:20, //para IOs
    flex:1,
    flexDirection:'row',
    alignItems:'flex-start',
    //backgroundColor:'#222222'
  },
  texto:{
    marginLeft:10
  }
});
