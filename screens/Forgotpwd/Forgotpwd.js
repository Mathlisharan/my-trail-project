import React from 'react';
import { TextInput, View, ScrollView, Text, Image, TouchableOpacity, width } from 'react-native';




export default class Forgotpwd extends React.Component {


    render() {
        return (
            <View>
               
                    <View>
                        <Image source={require('D:/tikazizzares/assets/Login.png')} style={{ alignSelf: 'center', width: '100%', top: '-10%' }}></Image>

                        <View style={{ top: '-55%', paddingLeft: 22, }}>
                            <Text style={{ color: '#FFFFFF', fontSize: 30, fontWeight: 'bold' }}>Mot de passe</Text>
                            <Text style={{ color: '#FFFFFF', fontSize: 30, fontWeight: 'bold' }}>oublié</Text>

                        </View>


                    </View>

                    <View style={{ top: '-14%' }}>
                        <Text style={{ fontSize: 16, paddingLeft: 40 }}>Entrez votre adresse électronique, nous</Text>
                        <Text style={{ fontSize: 16, paddingLeft: 40 }}>vous enverrons un lien pour réinitialiser</Text>
                        <Text style={{ fontSize: 16, paddingLeft: 40 }}>votre mot de passe.</Text>
                    </View>




                    <View style={{ top: -45 }}>

                        <TextInput placeholder='Email' placeholderTextColor='#A9A9A9' style={{ marginLeft: 30, fontSize: 16, color: '#000000', borderWidth: 1, width: '85%', height: '28%', borderRadius: 10, borderColor: '#878794', paddingLeft: 25 }}>
                        </TextInput>
                        <View style={{
                            marginTop: -20,
                            marginLeft: 30,
                            marginBottom: 10,
                            marginRight: 30,
                            padding: 10



                        }} />








                    </View>





                    <View style={{ alignItems: 'center', top: '-18%', justifyContent: 'center' }}>
                        <TouchableOpacity style={{ backgroundColor: '#FBD722', width: '44%', height: 50, justifyContent: 'center', alignItems: 'center', justifyContent: "center", borderRadius: 5 }}>
                            <Text style={{ fontSize: 19, color: "#000000", fontWeight: 'bold' }}>
                                Continuer
              </Text>


                        </TouchableOpacity>
                    </View>











            </View>
        );
    }
}
