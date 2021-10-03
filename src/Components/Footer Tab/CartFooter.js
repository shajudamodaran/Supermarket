import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function CartFooter() {
    return (
        <View style={styles.container}>

            <View style={{display:"flex",flexDirection:"column",}}>
            <Text style={{color:"white",fontSize:20,fontWeight:"bold"}} >₹ 70.00</Text>
            <Text style={{color:"white",fontSize:12}} >Total Amount</Text>
            </View>
            

            <TouchableOpacity activeOpacity={.7} style={styles.confirmBtn}>
            <Text style={{ fontSize:12}}>Confirm Order</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:"#269DD4",
        paddingHorizontal:15,
        paddingVertical:9
    },
    confirmBtn:{
        backgroundColor:"white",
        paddingHorizontal:12.5,
        paddingVertical:8,
        borderRadius:3,
       

    }

})
