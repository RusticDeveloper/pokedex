import { TestScheduler } from 'jest';
import React, { useState, useEffect } from 'react'
import { View, Button, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { color } from 'react-native-reanimated';
import Tts from 'react-native-tts';


const downPokedex = ({ pokeinfo }) => {
    const [valorTexto, setValorTexto] = useState('1');
    const [valorBuscar, setValorBuscar] = useState('');
    const [valorRespuesta, setValorRespuesta] = useState('');
    const peticion = new XMLHttpRequest();
    useEffect(() => {
        peticion.open('GET', `https://pokeapi.co/api/v2/pokemon/${valorTexto}`);
        peticion.send();
        peticion.onload = () => {
            if (peticion.status = 200) {
                if (peticion.response === 'Not Found') {
                    console.log('Pokemon no encontrado');
                    setValorRespuesta('Pokemon no encontrado');
                    pokeinfo('Pokemon no encontrado');  
                    Tts.getInitStatus().then(() => {
                        Tts.speak(`Pokemon no encontrado!!.`);
                      });  
                } else {
                    let respuesta = JSON.parse(peticion.response);
                    Tts.getInitStatus().then(() => {
                        Tts.speak(`${respuesta.name} es un pokemon con experiencia base de ${respuesta.base_experience},
                        con altura de ${respuesta.height} pulgadas y peso de ${respuesta.weight} libras.`);
                      });      
                    setValorRespuesta(respuesta);
                    console.log(respuesta);
                    pokeinfo(respuesta);
                }
            } else {
                console.log(`peticion HTTP fallida ${peticion.status}`);
            }
        }
        return()=>{setValorBuscar('null')}
    }, [valorBuscar]);

    const adelante=()=>{
        if (valorRespuesta!=='Pokemon no encontrado'&&valorRespuesta!=='') {
            
            setValorTexto((valorRespuesta.id+1).toString());
            setValorBuscar(valorTexto);
            
        }else{
           
            setValorTexto('1');
            setValorBuscar(valorTexto);
            
        }
    }
    const atras=()=>{
        if (valorRespuesta!=='Pokemon no encontrado'&&valorRespuesta!=='') {
            setValorTexto((valorRespuesta.id-1).toString());
            setValorBuscar(valorTexto);
             
        }else{
            setValorTexto('1');
            setValorBuscar(valorTexto);
            
        }
    }
    
    return (
        <View style={Styles.downBoxLayout}>
            <TextInput
                onChangeText={setValorTexto}
                value={valorTexto}
                style={Styles.input}
            ></TextInput>
            <View style={Styles.GamepadBox}>
                <TouchableOpacity onPress={atras} style={Styles.leftButton} ></TouchableOpacity>
                <TouchableOpacity onPress={adelante} style={Styles.upButton} ></TouchableOpacity>
                <TouchableOpacity onPress={adelante} style={Styles.rightButton} ></TouchableOpacity>
                <TouchableOpacity onPress={atras} style={Styles.bottomButton} ></TouchableOpacity>
            </View>
            <TouchableOpacity
                onPress={() => { setValorBuscar(valorTexto) }}
                style={Styles.searchButton}>
                    <View ><Text style={Styles.textoPosicion}>Buscar</Text></View>
                </TouchableOpacity>
        </View>
    )
}
const Styles = StyleSheet.create({
    downBoxLayout: {
        borderWidth: 5,
        borderColor: 'lightskyblue',
        borderRadius: 20,
        borderStyle: 'solid',
        padding: 15,
        height: 230,
        marginVertical: 5
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        backgroundColor: 'ivory',
        color: 'darkslategray'
    },
    GamepadBox: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap'
    },
    leftButton: {
        width: 0,
        height: 0,
        borderWidth: 50,
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
        borderEndColor: 'transparent',
        borderColor: 'indigo',
        top: 20,
        left: 40,
    },
    upButton: {
        width: 0,
        height: 0,
        borderWidth: 50,
        borderBottomColor: 'transparent',
        borderEndColor: 'transparent',
        borderStartColor: 'transparent',
        borderColor: 'indigo',
        left: -40,
        top: 10
    },
    rightButton: {
        width: 0,
        height: 0,
        borderWidth: 50,
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
        borderStartColor: 'transparent',
        borderColor: 'indigo',
        top: 20,
        left: -120
    },
    bottomButton: {
        width: 0,
        height: 0,
        borderWidth: 50,
        borderStartColor: 'transparent',
        borderTopColor: 'transparent',
        borderEndColor: 'transparent',
        borderColor: 'indigo',
        top: 35,
        left: -240
    },
    searchButton: {
        width: 110,
        height: 110,
        borderRadius: 50,
        backgroundColor: 'lightseagreen',
        left: 225,
        top: -90
    },
    textoPosicion:{
        color:'salmon',
        fontSize:28,
        top:28,
        left:10
    }
})
export default downPokedex