import React from 'react'
import { StyleSheet, Text, View,StatusBar } from 'react-native'

import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

import page1 from './Nav Pages/Page1'
import HomeHeader from '../../Components/Headers/HomeHeader';




export default function Homepage() {
    StatusBar.setTranslucent(true);StatusBar.setBackgroundColor('transparent');StatusBar.setBarStyle("light-content")

    return (
        <Drawer.Navigator
            drawerType="front"
            initialRouteName="home"
            drawerContent={props => CustomDrawer(props)}
            drawerContentOptions={{
                labelStyle: '',
                itemStyle: {},
            }}>
            <Drawer.Screen
                name="Home"
                component={page1}
                options={{
                    headerShown: false,
                    headerStyle: { backgroundColor: "#269DD4", elevation: 0, },
                    headerTintColor: "white",
                    headerTitle:<HomeHeader/> 

                    // drawerIcon: () => <Image resizeMode='contain' style={{ width: "8%", height: "60%" }} source={require('../../Images/Icons/homed.png')} />
                }}
            />

        </Drawer.Navigator>
    )
}


const CustomDrawer = props => {
    return (
      <View>
        <View style={{ backgroundColor: "#FAFAFA", height: "40%", justifyContent: "center", alignItems: "center", borderBottomWidth: .5, borderColor: "#98989A", marginBottom: 10 }}>
  
          {/* <Image resizeMode='contain' style={{ width: "80%", height: "60%" }} source={require('../../Images/Logo/mainlogo.png')} /> */}
  
        </View>
        <DrawerItemList {...props} />
      </View>
    );
  };

const styles = StyleSheet.create({})
