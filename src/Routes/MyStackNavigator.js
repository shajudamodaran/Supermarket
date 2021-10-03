import React, { useEffect, useState } from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Homepage from '../Pages/Homepage/Homepage';
import HomeHeader from '../Components/Headers/HomeHeader';
import SimpleHeader from '../Components/Headers/SimpleHeader';
import MyCart from '../Pages/Homepage/OtherPages/MyCart';
const Stack = createStackNavigator();


export const MyStackNavigator = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName="home" navigationOption={{ headerTintColor: "white" }} >

                <Stack.Screen
                    name="home"
                    component={Homepage}
                    options={{ headerShown: false }} />

                <Stack.Screen
                    name="cart"
                    component={MyCart}
                    options={{
                        title: 'Cart',
                        headerTitle:  props => <SimpleHeader name="Cart"/>,
                        headerStyle: { backgroundColor: '#269DD4'},
                        headerTintColor: '#fff',
                        headerTitleStyle: { fontWeight: 'normal', marginLeft: 0}
                    }} />

            </Stack.Navigator>

        </NavigationContainer>
    )
}
