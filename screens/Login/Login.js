import React from 'react';
import {TextInput,View, ScrollView, Text, Image, TouchableOpacity, width} from 'react-native';




export default class Login extends React.Component {


  render() {
    return (
      <View>
        
          <View>
            <Image source={require('D:/tikazizzares/assets/Login.png')} style={{ alignSelf: 'center', width: '100%', top: '-10%' }}></Image>
            
            <View style = {{top:'-55%', paddingLeft:22,}}>
            <Text style={{ color: '#FFFFFF', fontSize: 30, fontWeight:'bold', marginVertical:10}}>Se connecter</Text>
            <Text style={{ color: '#FFFFFF', fontSize:16}}>Entrez vos données de</Text>
            <Text style={{ color: '#FFFFFF' , fontSize:16}}>connexion pour continuer.</Text>
            </View>

          </View>

    


            <View style = {{top:-60}}>

              <TextInput placeholder='Email' placeholderTextColor ='#A9A9A9' style={{ marginLeft: 30, fontSize: 16, color: '#000000', borderWidth: 1, width: '85%', borderRadius: 10, borderColor: '#878794', paddingLeft: 25 }}>
              </TextInput>
              <View style={{
                marginTop: -20,
                marginLeft: 30,
                marginBottom: 10,
                marginRight: 30,
                padding: 10



              }} />

          

              <TextInput placeholderTextColor='#A9A9A9'
                placeholder='Mot De Passe' secureTextEntry style={{ paddingLeft: 25, marginLeft: 30, fontSize: 16, color: '#000000', borderWidth: 1, width: '85%', borderRadius: 10, marginVertical: 35, borderColor: '#878794' }}>
              </TextInput>
              <View style={{

                marginTop: -25,
                marginLeft: 30,
                marginBottom: 10,
                marginRight: 30,

              }} />


          

            </View>
<View style = {{top:-65}}>
            <TouchableOpacity
              
              style={{ width: width, flexDirection: 'column' }} onPress={() =>this.props.navigation.navigate('Forgotpwd')}>
              <Text style={{ textAlign: 'right', marginRight: 20, fontSize: 17, color: '#FD170C' }} >
                Mot de passe oublié?
              </Text>
            </TouchableOpacity>
            </View>
          



          <View style={{ alignItems: 'center', top:-60 }}>
            <TouchableOpacity style={{ backgroundColor: '#FBD722', width: '42%', height: 47, alignItems: 'center', justifyContent: "center", top: 65, borderRadius: 5}} 
            onPress={() =>this.props.navigation.navigate('BankDetails')}>
              <Text style={{ fontSize: 18, color: "#000000" }}>
                Se connecter
              </Text>


            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', width: 70, top:28 }}>
            <TouchableOpacity>
            <Image source={require('D:/tikazizzares/assets/fb.png')} style={{ width: 30, height: 30 }}></Image>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image source={require('D:/tikazizzares/assets/google.png')} style={{ width: 30, height: 30 }}></Image>
            </TouchableOpacity>


          </View>




          
          <View style={{ flexDirection: 'row', justifyContent: 'center',  top:65}}>
            
            <Text style={{ textAlign: 'right', marginRight: 20, fontSize: 19, color: '#000000' }}>
              Nouvel Utilisateur ?
              </Text>
              <TouchableOpacity onPress={() =>this.props.navigation.navigate('Signup')}>
            <Text style={{ textAlign: 'right', marginLeft: -15, fontSize: 19, color: '#FD170C' }} >
              S'inscrire
              </Text>
              </TouchableOpacity>
          </View>
        

         

     
      </View>
    );
  }
}
