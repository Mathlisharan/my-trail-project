import React from 'react';
import {TextInput,View, ScrollView, Text, Image, TouchableOpacity, Button} from 'react-native';



export default class BankDetails extends React.Component {



  render() {
    return (
      <View>
        
        <View style = {{backgroundColor:'tomato', width:'100%', height:'15%'}}>
            <Text style = {{color:'white', fontWeight:'bold', fontSize:17, justifyContent:'center', alignSelf:'center', padding:20}}>Remplir vos coordonnées</Text>
            
        </View>    
        <View>
        <TouchableOpacity onPress={() =>this.props.navigation.navigate('Login')} style = {{top:-38, marginLeft:15}}>
            <Image source = {require ("D:/tikazizzares/assets/26.png")} style = {{width:15, height:15}}></Image>
            </TouchableOpacity>
        </View>
         
    <View style = {{top:'7%'}}>

              <TextInput placeholder='Domicilation' placeholderTextColor ='#A9A9A9' style={{ marginLeft: 30, fontSize: 16, color: '#000000', borderWidth: 1, width: '85%', height:53, borderRadius: 8, borderColor: '#878794', paddingLeft: 25 }}>
              </TextInput>
              <View style={{
                marginTop: -20,
                marginLeft: 30,
                marginBottom: 10,
                marginRight: 30,
                
}} />

        <TextInput placeholderTextColor='#A9A9A9'
                placeholder='Titulaire Du Compte' style={{ paddingLeft: 25, marginLeft: 30, fontSize: 16, color: '#000000', borderWidth: 1, width: '85%', height:53, borderRadius: 8, marginVertical: 35, borderColor: '#878794' }}>
              </TextInput>
              <View style={{

                marginTop: -55,
                marginLeft: 30,
                marginBottom: 10,
                marginRight: 30,

              }} />

<TextInput placeholderTextColor='#A9A9A9'
                placeholder='IBAN' style={{ paddingLeft: 25, marginLeft: 30, fontSize: 16, color: '#000000', borderWidth: 1, width: '85%', height:53, borderRadius: 8, marginVertical: 35, borderColor: '#878794' }}>
              </TextInput>
              <View style={{

                marginTop: -55,
                marginLeft: 30,
                marginBottom: 10,
                marginRight: 30,

              }} />

<TextInput placeholderTextColor='#A9A9A9'
                placeholder='Code BIC' style={{ paddingLeft: 25, marginLeft: 30, fontSize: 16, color: '#000000', borderWidth: 1, width: '85%', height:53, borderRadius: 8, marginVertical: 35, borderColor: '#878794' }}>
              </TextInput>
              <View style={{

                marginTop: -55,
                marginLeft: 30,
                marginBottom: 10,
                marginRight: 30,

              }} />


           </View>
        

           <View style={{ alignItems: 'center', top:'6%' }}>
            <TouchableOpacity onPress={() =>this.props.navigation.navigate('Accountactivation')} style={{ backgroundColor: '#FBD722', width: '38%', height: 40, alignItems: 'center', justifyContent: "center", top: 65, borderRadius: 5 }}>
              <Text style={{ fontSize: 16, color: "#000000", fontWeight:'bold' }} >
              Enregistrer
              </Text>
              </TouchableOpacity>
              </View>


       
      </View>
    );
  }
}
