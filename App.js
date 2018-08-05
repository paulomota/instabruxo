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

    constructor() {
        super();
        this.state = {
            fotos: []
        }
    }

    componentDidMount() {
        fetch('https://instalura-api.herokuapp.com/api/public/fotos/rafael')
            .then(resposta => resposta.json())
            .then(json => this.setState({fotos: json}))
            .catch(e => {
                console.warn('Não foi possível carregar as fotos: ' + e);
                this.setState({status: 'ERRO'})
            });
    }

    render() {

        const fotosFixas = [
            {id: 1, loginUsuario: "Paulo Mota"},
            {id: 2, loginUsuario: "Fabrício Raphael"},
            {id: 3, loginUsuario: "Adriano Imperador"},
        ]

        return (
            <FlatList style={styles.container}
                keyExtractor={item => item.id}
                data={this.state.fotos}
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
  },
});
