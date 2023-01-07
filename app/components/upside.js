
import React,{useEffect,useState} from 'react'
import {View,Button,Text,StyleSheet,Image} from 'react-native'
import Tts from 'react-native-tts';

const UpPokedex=({pokeInfo})=>{
    const peticion = new XMLHttpRequest();
    const identificacion =pokeInfo.id;
    
    return(
        <View style={Styles.upBoxLayout}>
            <Text style={Styles.TextoEstilo}><Text style={Styles.TextoTitulo}>Nombre:</Text> {pokeInfo=='Pokemon no encontrado'?'Pokemon no encontrado':pokeInfo.name}</Text>
            <Text style={Styles.TextoEstilo}><Text style={Styles.TextoTitulo}>Experiencia base:</Text> {pokeInfo.base_experience}</Text>
            <Text style={Styles.TextoEstilo}><Text style={Styles.TextoTitulo}>Altura:</Text> {pokeInfo.height}</Text>
            <Text style={Styles.TextoEstilo}><Text style={Styles.TextoTitulo}>Peso:</Text> {pokeInfo.weight}</Text>
            <Image style={Styles.imageStyle} source={{uri:`https://pokeres.bastionbot.org/images/pokemon/${identificacion}.png`}} />
        </View>
    )
}
const Styles=StyleSheet.create({
    upBoxLayout:{
        borderWidth:5,
        borderColor:'lightskyblue',
        borderRadius:20,
        borderStyle:'solid',
        padding:25,
        height:600,
        marginVertical:5
    },
    imageStyle:{
        width:300,
        height:300,
        marginVertical:30,
        left:35
    },
    TextoEstilo:{
        backgroundColor:'grey',
        color:'black',
        fontSize:30,
        paddingVertical:5,
        paddingHorizontal:10
    },
    TextoTitulo:{
        color:'oldlace'
    }
})
export default UpPokedex