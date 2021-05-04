import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import home from './home';
import ConnetionComponent from './Login/ConnetionComponent';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen
          name="Home"
          component={home}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={ConnetionComponent} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;