import 'react-native-gesture-handler';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icons from 'react-native-vector-icons/FontAwesome';
import store from './src/redux/store';
import Login from './src/components/login/Login';
import Booklist from './src/Booklist/Booklist';
import {Provider} from 'react-redux';
import {navigate,navigationRef} from './src/NavigationRoot';

const Stack=createStackNavigator();

export default function App() {
  return (
  
         <NavigationContainer ref={navigationRef}>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen
            name="Books"
            component={Booklist}
            options={{
              headerLeft: null,
              headerRight: () => (
                <TouchableOpacity onPress={() => {
                  navigate("Login");
                }}>
                  <Icons name="power-off" size={26} style={{ paddingRight: 10 }} />
                </TouchableOpacity>
              )
            }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  
  );
}


