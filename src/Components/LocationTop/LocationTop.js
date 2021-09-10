import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { LOCATION_ICON } from '../../Assets/Call Asset/CallAsset'

export default function LocationTop() {
    return (
        <View style={styles.container}>
            <LOCATION_ICON/>
            <Text style={{color:"#676767"}}>Deliver to :</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        backgroundColor:"#E7E7E7",
        padding:10,
        display:"flex",
        flexDirection:"row"
    }
})
