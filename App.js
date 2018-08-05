/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import {Platform, StyleSheet, FlatList} from 'react-native';
import Post from './src/components/Post';

type Props = {};


export default class App extends Component<Props> {
  render() {

    const fotos = [
        {id: 1, usuario: "Paulo Mota"},
        {id: 2, usuario: "Fabrício Raphael"},
        {id: 3, usuario: "Adriano Imperador"},
    ]

    return (
        <FlatList style={styles.container}
            keyExtractor={item => item.id}
            data={fotos}
            renderItem={ ({item}) =>
                <Post foto={item}/>
            }
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: '#F5FCFF',
  },
});
