

import React from 'react';
import { Image,Pressable } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';


import AlbumScreen from '../screens/AlbumScreen';
import DetailScreen from '../screens/DetailScreen';
import Page2 from '../screens/Page2';
import Page3 from '../screens/Page3';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const Navigation = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarActiveTintColor: '#6200EE',
        
      }}
      
    >
      <Tab.Screen 
        name="HomeStack" 
        component={HomeStack}
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          ),
          
        }}
        
      />
      <Tab.Screen 
        name="Wishlist" 
        component={Page2} 
        options={{
          title: "Wishlist",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bookmark" color={color} size={24} />
          ),
        }}
      />

        <Tab.Screen 
          name="My books" 
          component={Page3} 
          options={{
            title: "My books",
            headerTitleStyle: {
              fontWeight: '400',
              fontSize: 20
            },
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="book-open" color={color} size={24} />
            ),
            
          }}
        />
    </Tab.Navigator>
  );
}

const HomeStack = () => {
  return (
    <Stack.Navigator
     
    >
      <Stack.Screen
        name="Home"
        component={AlbumScreen}
        options={{
          title: " ",
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          headerShadowVisible: false,
          headerLeft: () => (
           
            <Image source={{uri:'https://github.com/FFF2832/wk4test/blob/master/assets/wk4hw/icon%20(1).png?raw=true'}} 
            style={{
              marginTop:30,
              marginBottom:19,
              marginLeft:5,
              height:12,
              width:18,
          }}
            />
 
          ),
          headerRight: () => (
           
            <Image source={{uri:'https://github.com/FFF2832/wk4test/blob/master/assets/wk4hw/icon.png?raw=true'}} 
            style={{
              marginTop:30,
              marginBottom:19,
              height:17.5,
              width:17.5,
          }}
            />
 
          ),
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={({ route,navigation }) => ({
          title: " ",
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          headerLeft: ({color}) => (

          <Pressable 
            onPress={() => {navigation.goBack();}}
          >
          <AntDesign name="left" color={color} size={24} />
          </Pressable>  
            
          ),

          headerRight: () => (
           
            <MaterialCommunityIcons name="bookmark" color='#6200EE' size={24}/>
 
          ), 

          headerShadowVisible: false,
        })}
      />
    </Stack.Navigator>
  );
}

export default Navigation;