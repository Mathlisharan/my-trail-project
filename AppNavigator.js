import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splashone from './screens/Splashone/Splashone'
import Splashtwo from './screens/Splashtwo/Splashtwo'
import Splashthree from './screens/Splashthree/Splashthree'
import Login from './screens/Login/Login'
import Signup from './screens/Signup/Signup'
import Forgotpwd from './screens/Forgotpwd/Forgotpwd'
import BankDetails from './screens/BankDetails/BankDetails'
import Accountactivation from './screens/Accountactivation/Accountactivation'
import Home from './screens/Home/Home'



const Stack = createStackNavigator();

export default class AppNavigator extends React.Component {
    render() {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{headerShown: false}}>
      <Stack.Screen
          name="Splashone"
          component={Splashone}
          options={{}}
        />

        <Stack.Screen
          name="Splashtwo"
          component={Splashtwo}
          options={{}}
        />

        <Stack.Screen
          name="Splashthree"
          component={Splashthree}
          options={{}}
        />

          <Stack.Screen
          name="Login"
          component={Login}
          options={{}}
        />

<Stack.Screen
          name="Signup"
          component={Signup}
          options={{}}
        />

        <Stack.Screen
          name="Forgotpwd"
          component={Forgotpwd}
          options={{}}
        />

        


<Stack.Screen
          name="BankDetails"
          component={BankDetails}
          options={{}}
          
        />

<Stack.Screen
          name="Accountactivation"
          component={Accountactivation}
          options={{}}
        />

<Stack.Screen
          name="Home"
          component={Home}
          options={{}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
};