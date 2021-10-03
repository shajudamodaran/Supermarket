import { Button } from 'native-base'
import React from 'react'
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import { LOCATION_ICON } from '../../Assets/Call Asset/CallAsset'

export default function LocationTop() {
    return (
        <View style={styles.maincontainer}>
            <View style={styles.container}>
                <LOCATION_ICON />
                <Text style={{ color: "#676767" }}>Deliver to :</Text>
            </View>

            <TouchableOpacity style={styles.btn} activeOpacity={.6}>
                <Text style={{fontSize:12}}>Change</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: "#E7E7E7",
        padding: 3,
        display: "flex",
        flexDirection: "row",
        alignItems:"center"
    },
    maincontainer: {
        backgroundColor: "#E7E7E7",
        padding: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent:"space-between",
        elevation:5
       
    },
    btn:{
        padding:5,
        borderColor:"#269DD4",
        borderWidth:1,
        borderRadius:5,
        paddingHorizontal:10,
        backgroundColor:"white",
        fontSize:12
    }
})
