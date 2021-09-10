import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ADD_ICON_ROUND, CART_ICON_SMALL } from '../../Assets/Call Asset/CallAsset'

export default function AddTocartButton() {
    return (
        <View style={styles.container}>
            <CART_ICON_SMALL/>
            <Text style={{color:"#269DD4",fontWeight:"500"}}>Add</Text>
            <ADD_ICON_ROUND/>
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        backgroundColor:"white",
        borderRadius:5,
        borderWidth:1,
        borderColor:"#269DD4",
        width:"60%",
        height:25,
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:5
       
    }
})
