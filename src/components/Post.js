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
    Dimensions,
    TouchableOpacity} from 'react-native';

const width = Dimensions.get('screen').width;

export default class Post extends Component<Props> {

    constructor(props){
        super(props);
        this.state = {foto: this.props.foto}
    }

    carregaIcone(likeada){
        return likeada ? require('../../resources/img/like_checked.png') : require('../../resources/img/like.png')
    }
      
    like(){
        const fotoAtualizada = {
            ...this.state.foto,
            likeada: !this.state.foto.likeada
        }
        
        this.setState({foto: fotoAtualizada});
    }

  render() {
    const { foto } = this.state;

    return (
        <View>
            <View style={styles.cabecalho}>
                <Image source={{uri: foto.urlPerfil}} style={styles.fotoDePerfil} />  
                <Text>{foto.loginUsuario}</Text>   
            </View>
            <Image source={{uri: foto.urlFoto}} style={styles.foto}/>
            <View style={styles.rodape}>
                <TouchableOpacity onPress={this.like.bind(this)}>
                    <Image style={styles.botaoDeLike} source={this.carregaIcone(foto.likeada)} />
                </TouchableOpacity>
            </View>
        </View>

        /* codigo com as fotos fixas do ronaldinho
        <View>
            <View style={styles.cabecalho}>
                <Image source={require('../../resources/img/ronaldinho.png')} style={styles.fotoDePerfil} />  
                <Text>{this.props.foto.loginUsuario}</Text>   
            </View>
            <Image source={require('../../resources/img/ronaldinho.png')} style={styles.foto}/>
        </View>
        */
    );
  }
}

const styles = StyleSheet.create({
    cabecalho: {
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    fotoDePerfil: {
        marginRight: 10,
        borderRadius: 20,
        width: 40,
        height: 40,
    },
    foto: {
        width: width,
        height: width,
    },
    botaoDeLike: {
        width: 40,
        height: 40
    },
    rodape: {
        margin: 10
    }
});
