import React from 'react'
import { StyleSheet, Text, View ,TouchableOpacity,StatusBar} from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { AllCateIcon, CartIcon, DrawerIcon, ProfileIcon, SearchIcon } from '../../Assets/Call Asset/CallAsset'

export default function SimpleHeader(props) {
    const navigation=useNavigation()
    return (
        <View style={{width:"108%",marginLeft:-18, backgroundColor: "#269DD4", padding: 5, display: "flex", flexDirection: "row", justifyContent:"space-between" }}>

            <Text style={{color:"white",fontSize:16}}>{props.name}</Text>

            <View style={{ display: "flex", flexDirection: "row" }}>
                <View style={{ marginRight: 25 }}><ProfileIcon /></View>
                <TouchableOpacity activeOpacity={.8} style={{ marginRight: 10 }}><CartIcon /></TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({})
