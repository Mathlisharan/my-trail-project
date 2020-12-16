import React from 'react';
import {View,Text, Image, TouchableOpacity} from 'react-native';

export default class Accountactivation extends React.Component {

    render() {
        return (

            <View>
                <View style={{top:'20%',justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={require("D:/tikazizzares/assets/87.png")} style={{ width: '82%', height: '68%'}}/>
                    </View>
                    <View style = {{top:'-22%'}}>
                    <Text style={{ fontSize: 18, fontWeight:'bold', margin: 20,textAlign:'center', fontFamily: 'poppins' }} >Activation de compte</Text>
                    <Text style={{ fontSize: 12, color: "#000000", alignSelf:'center', marginVertical:-10}}>Félicitations ! Votre compte a</Text>
                    <Text style={{fontSize: 12, color: "#000000", alignSelf:'center', marginVertical:10}}>été activé</Text>
                    <TouchableOpacity onPress={() =>this.props.navigation.navigate("Home")} style={{top:7, backgroundColor: '#FBD722', width:'32%', height:32, borderRadius: 5, alignSelf:'center', justifyContent:'center'}}>
                    <Text style={{ fontSize: 12, color: "#000000", fontWeight:'bold', alignSelf:'center'}}>Continuer</Text>
                    </TouchableOpacity>
                    </View>
               </View>
        );
    }
}
