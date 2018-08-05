/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import {
    Platform, 
    StyleSheet, 
    Text, 
    View, 
    Image,
    Dimensions} from 'react-native';

const width = Dimensions.get('screen').width;

export default class Post extends Component<Props> {
  render() {
    return (
      <View>
        <View>
            <Text>{this.props.foto.usuario}</Text>   
            <Image source={require('../../resources/img/ronaldinho.png')} style={{width: 40, height: 40, }} />  
        </View>
        <Image source={require('../../resources/img/ronaldinho.png')} style={{width: width, height: width}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});
