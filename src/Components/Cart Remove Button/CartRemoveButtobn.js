import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { CART_REMOVE_ICON } from '../../Assets/Call Asset/CallAsset'

export default function CartRemoveButtobn() {
    return (
        <TouchableOpacity activeOpacity={.8} style={styles.container}>
            <CART_REMOVE_ICON/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    container: {
        paddingHorizontal: 20,
        paddingVertical: 7,
        backgroundColor: "#269DD4",
        borderRadius: 5,
        
    }
})
