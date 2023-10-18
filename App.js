import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import pages here
import Home from './pages/Home';
import Search from './pages/Search';
import Library from './pages/Library';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Accueil"
        screenOptions={{
          headerShown: false
        }}
      >
        <Tab.Screen name="Accueil" component={Home}/>
        <Tab.Screen name="Recherche" component={Search}/>
        <Tab.Screen name="Bibliothèque" component={Library}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
