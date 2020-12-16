import React from 'react';
import {TextInput,View, ScrollView, Text, Image, TouchableOpacity, Button} from 'react-native';



export default class Signup extends React.Component {



  render() {
    return (
      <View>
        <ScrollView>
          <View>
            <Image source={require('D:/tikazizzares/assets/Login.png')} style={{ alignSelf: 'center', width: '100%', top: '-10%' }}></Image>
            
            <View style = {{top:'-55%', paddingLeft:35,}}>
            <Text style={{ color: '#FFFFFF', fontSize: 30, fontWeight:'bold', marginVertical:10}}>S'inscrire</Text>
            <Text style={{ color: '#FFFFFF', fontSize:16}}>Vous devez créer un</Text>
            <Text style={{ color: '#FFFFFF' , fontSize:16}}>compte pour continuer.</Text>
            </View>

          </View>

    <View style = {{top:'-12%'}}>

              <TextInput placeholder='Nom Du Point De Vente' placeholderTextColor ='#A9A9A9' style={{ marginLeft: 30, fontSize: 16, color: '#000000', borderWidth: 1, width: '85%', height:55, borderRadius: 8, borderColor: '#878794', paddingLeft: 25 }}>
              </TextInput>
              <View style={{
                marginTop: -20,
                marginLeft: 30,
                marginBottom: 10,
                marginRight: 30,
                
}} />

        <TextInput placeholderTextColor='#A9A9A9'
                placeholder='Propriétaire' style={{ paddingLeft: 25, marginLeft: 30, fontSize: 16, color: '#000000', borderWidth: 1, width: '85%', borderRadius: 8, marginVertical: 35, borderColor: '#878794' }}>
              </TextInput>
              <View style={{

                marginTop: -55,
                marginLeft: 30,
                marginBottom: 10,
                marginRight: 30,

              }} />

<TextInput placeholderTextColor='#A9A9A9'
                placeholder='Adresse Du Point De Vente' style={{ paddingLeft: 25, marginLeft: 30, fontSize: 16, color: '#000000', borderWidth: 1, width: '85%', borderRadius: 8, marginVertical: 35, borderColor: '#878794' }}>
              </TextInput>
              <View style={{

                marginTop: -55,
                marginLeft: 30,
                marginBottom: 10,
                marginRight: 30,

              }} />

<TextInput placeholderTextColor='#A9A9A9'
                placeholder='Email' style={{ paddingLeft: 25, marginLeft: 30, fontSize: 16, color: '#000000', borderWidth: 1, width: '85%', borderRadius: 8, marginVertical: 35, borderColor: '#878794' }}>
              </TextInput>
              <View style={{

                marginTop: -55,
                marginLeft: 30,
                marginBottom: 10,
                marginRight: 30,

              }} />

<TextInput placeholderTextColor='#A9A9A9'
                placeholder='Numéro De Téléphone' style={{ paddingLeft: 25, marginLeft: 30, fontSize: 16, color: '#000000', borderWidth: 1, width: '85%', borderRadius: 8, marginVertical: 35, borderColor: '#878794' }}>
              </TextInput>
              <View style={{

                marginTop: -55,
                marginLeft: 30,
                marginBottom: 10,
                marginRight: 30,

              }} />

<TextInput placeholderTextColor='#A9A9A9'
                placeholder='Mot de passe' secureTextEntry style={{ paddingLeft: 25, marginLeft: 30, fontSize: 16, color: '#000000', borderWidth: 1, width: '85%', borderRadius: 8, marginVertical: 35, borderColor: '#878794' }}>
              </TextInput>
              <View style={{

                marginTop: -55,
                marginLeft: 30,
                marginBottom: 10,
                marginRight: 30,

              }} />

<TextInput placeholderTextColor='#A9A9A9'
                placeholder='Description' style={{ paddingLeft: 25, marginLeft: 30, fontSize: 16, color: '#000000', borderWidth: 1, width: '85%', borderRadius: 10, marginVertical: 35, borderColor: '#878794' }}>
              </TextInput>
              <View style={{

                marginTop: -55,
                marginLeft: 30,
                marginBottom: 10,
                marginRight: 30,

              }} />

           </View>
        

           <View style={{ alignItems: 'center', top:-30 }}>
            <TouchableOpacity style={{ backgroundColor: '#FBD722', width: '42%', height: 47, alignItems: 'center', justifyContent: "center", top: 65, borderRadius: 5 }}>
              <Text style={{ fontSize: 18, color: "#000000" }}>
              S'inscrire
              </Text>
              </TouchableOpacity>
              </View>

{/* <TouchableOpacity > */}
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={{ textAlign: 'right', marginRight: 20, fontSize: 19, color: '#000000' , marginVertical:'18%' }}>
            Déjà utilisateur ?
              </Text>
              <TouchableOpacity onPress={() =>this.props.navigation.navigate('Login')} style = {{marginVertical:'18%'}}>
            <Text style={{ textAlign: 'right', marginLeft: -15, fontSize: 19, color: '#FD170C' }} >
            Se connecter
              </Text>
              </TouchableOpacity>
          </View>

          {/* </TouchableOpacity> */}

        </ScrollView>
      </View>
    );
  }
}
