import React from 'react';
import {Alert,AsyncStorage,Button, View, ImageBackground, Image, Text} from 'react-native';

export default class Splashtwo extends React.Component {

    componentDidMount = () =>{
        setTimeout(() => {
            this.props.navigation.navigate('Splashthree');
           }, 3500);
       };

  
  render() {
    return (
        <View>
      <ImageBackground source = {require ('D:/tikazizzares/assets/86.png')} style = {{width:'100%', height:'100%'}}>

      <Image source = {require ('D:/tikazizzares/assets/85.png')} style = {{width:'44%', height:'21%', top:'40%', justifyContent:'center', alignContent:'center', alignSelf:'center', borderRadius:25}}></Image>
       
             <View style = {{top:'43%', justifyContent:'center', alignContent:'center'}}>
            <Text style = {{color:'white', fontWeight:'bold', alignSelf:'center', padding:12, fontSize:16}}>Commandez des pizzas en</Text>
            <Text style = {{color:'white', fontWeight:'bold', alignSelf:'center' , fontSize:16}}>ligne en quelques clics seulement.</Text>
            </View>
       
        </ImageBackground>
      
      </View>
    );
  

  }
}