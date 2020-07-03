import React from 'react';

import SignIn from '../pages/Signin';
import SingUp from '../pages/Signup';

import {createStackNavigator} from '@react-navigation/stack';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      // headerTintColor: '#fff',
      // headerStyle: {backgroundColor: '#7159c1'},
      cardStyle: {backgroundColor: '#312e38'},
    }}>
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="SingUp" component={SingUp} />
  </Auth.Navigator>
);

export default AuthRoutes;
