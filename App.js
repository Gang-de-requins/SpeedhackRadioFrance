import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

// Import pages here
import HomeNavigation from './pages/HomeNavigation';
import Search from './pages/Search';
import Library from './pages/Library';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Accueil"
        screenOptions={{
          headerShown: false
        }}
      >
        <Tab.Screen
          name="Accueil"
          component={HomeNavigation}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={require('./assets/home-icon.png')}
                style={{
                  width: 24,
                  height: 24,
                }}
              />
            )
          }}
        />
        <Tab.Screen
          name="Recherche"
          component={Search}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={require('./assets/search-icon.png')}
                style={{
                  width: 24,
                  height: 24,
                }}
              />
            )
          }}
        />
        <Tab.Screen
          name="Bibliothèque"
          component={Library}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={require('./assets/library-icon.png')}
                style={{
                  width: 24,
                  height: 24,
                }}
              />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
