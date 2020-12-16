import React from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import { Footer, FooterTab, Button} from 'native-base';





export default class Home extends React.Component {

    

    render() {
        return (

            
            <View style={{ backgroundColor: "tomato", flex: 1, width: "100%", top: "-79%", borderBottomLeftRadius: 70, borderBottomRightRadius: 70 }}>

                <Text style={{ top: '85%', fontSize: 16, color: '#FFFFFF', paddingLeft: 50, fontWeight: 'bold' }}>23, Simple Streets, France</Text>
                <Image source={require('D:/tikazizzares/assets/10.png')} style={{ width: 20, height: 20, top: '82.5%', marginLeft: 20 }}></Image>
                <Image source={require('D:/tikazizzares/assets/91.png')} style={{ width: 20, height: 20, top: '80.5%', marginLeft: '90%' }}></Image>

                <View style={{ flexDirectin: 'row', top: '32%', justifiContent: 'center' }}>
                    <View style={{ backgroundColor: '#0CAF17', width: '37%', height: '20%', top: '84%', borderRadius: 5, left: '7%' }}></View>
                    <Image source={require('D:/tikazizzares/assets/89.png')} style={{ width: '7%', height: '5%', top: '65%', marginLeft: '34%' }}></Image>
                    <Text style={{ top: '64%', left: 40, color: '#FFFFFF', fontWeight: 'bold' }}>Total</Text>
                    <Text style={{ top: '65%', left: 40, color: '#FFFFFF', fontWeight: 'bold' }}>commandes</Text>
                    <Text style={{ top: '62%', left: 140, color: '#FFFFFF', fontWeight: 'bold', fontSize: 10 }}>24</Text>


                    <View style={{ backgroundColor: '#FBD722', width: '37%', height: '20%', top: '48.5%', borderRadius: 5, left: '55%' }}></View>
                    <Image source={require('D:/tikazizzares/assets/90.png')} style={{ width: '7%', height: '5%', top: '30%', marginLeft: '82%' }}></Image>
                    <Text style={{ top: '30%', left: '60%', color: '#FFFFFF', fontWeight: 'bold' }}>Gains</Text>
                    <Text style={{ top: '30%', left: '60%', color: '#FFFFFF', fontWeight: 'bold' }}>totaux</Text>
                    <Text style={{ top: '26%', left: '82.5%', color: '#FFFFFF', fontWeight: 'bold', fontSize: 10 }}>459 €</Text>
                </View>

                <View style={{ flexDirectin: 'row', top: '36%', fontSize: 16, paddingLeft: 30 }}>


                    <Text>Vous êtes hors ligne maintenant.</Text>
                    <Text>Allez en ligne pour accepter les commandes</Text>


                </View>

                <View style={{ top: '39%', paddingLeft: 30 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Mes gains de voyage</Text>
                </View>

                <View style={{ flexDirectin: 'row', top: '40%' }}>
                    <View style={{ backgroundColor: 'red', width: '30%', height: '13%', marginLeft: 30, alignContent: 'center', borderRadius: 3 }}></View>
                    <Text style={{ paddingLeft: '15%', top: -23, alignItems: 'center', justifiContent: 'center', color: '#FFFFFF', fontWeight: 'bold', fontSize: 12 }}>Mensuel</Text>
                    <View style={{ backgroundColor: '#0CAF17', width: '33%', height: '13%', marginLeft: '40%', borderRadius: 3, top: '-19.75%' }}></View>
                    <Text style={{ paddingLeft: '45%', top: -69, alignItems: 'center', justifiContent: 'center', color: '#FFFFFF', fontWeight: 'bold', fontSize: 12 }}>Hebdomadaire</Text>
                </View>



                <View style={{ top:'63%' }}>
                    <Footer>
                        <FooterTab style = {{backgroundColor:'white'}}>
                            
                            <Button vertical>
                                <TouchableOpacity style={{alignItems:'center'}}>
                                    <Image source={require("D:/tikazizzares/assets/92.png")} style={{width: 15, height: 15}}/>
                                    <Text style={{ color: 'red', fontSize: 10 }}>Accueil</Text>
                                </TouchableOpacity>
                            </Button>


                            <Button vertical>
                                <TouchableOpacity style={{ alignItems: 'center' }}>
                                    <Image source={require("D:/tikazizzares/assets/93.png")} style={{ width: 15, height: 15 }}/>
                                     <Text style={{ fontSize: 10 }}>Commandes</Text>
                                </TouchableOpacity>
                            </Button>


                            <Button vertical>
                                <TouchableOpacity style={{ alignItems: 'center' }}>
                                    <Image source={require("D:/tikazizzares/assets/95.png")} style={{ width: 15, height: 15 }}/>
                                    <Text style={{ fontSize: 10 }}>Gains</Text>
                                </TouchableOpacity>
                            </Button>

                            <Button vertical>
                                <TouchableOpacity style={{ alignItems: 'center' }}>
                                    <Image source={require("D:/tikazizzares/assets/94.png")} style={{ width: 15, height: 15 }}/>
                                    <Text style={{ fontSize: 10 }}>Mon compte</Text>
                                </TouchableOpacity>
                            </Button>
                        </FooterTab>
                    </Footer>
                </View>
            </View>
            
        );
    }
}
