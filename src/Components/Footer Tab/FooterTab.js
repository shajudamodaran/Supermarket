import React from 'react'
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import { FOOTER_ACCCOUNT_ICON, FOOTER_CART_ICON, FOOTER_HOME_ICON, FOOTER_ORDERS_ICON, FOOTER_SEARCH_ICON } from '../../Assets/Call Asset/CallAsset'

import { useSelector, useDispatch } from 'react-redux'
import { setActivePageRedux } from '../../Redux/ActivePageSlice'
import { useNavigation } from '@react-navigation/core'


export default function FooterTab() {

    let dispatch=useDispatch()
    const navigation=useNavigation()

    return (
        <View style={styles.container}>
           
            <TouchableOpacity onPress={()=>{dispatch(setActivePageRedux("actualhome"))}} activeOpacity={.5}><FOOTER_HOME_ICON/></TouchableOpacity>
            <TouchableOpacity activeOpacity={.5}><FOOTER_ORDERS_ICON/></TouchableOpacity>
            <TouchableOpacity onPress={()=>{dispatch(setActivePageRedux("searchpage"))}} activeOpacity={.5}><FOOTER_SEARCH_ICON/></TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('cart')}} activeOpacity={.5}><FOOTER_CART_ICON/></TouchableOpacity>
            <TouchableOpacity onPress={()=>{dispatch(setActivePageRedux("testpage"))}}  activeOpacity={.5}><FOOTER_ACCCOUNT_ICON/></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:"100%",
        paddingLeft:20,
        paddingRight:20,
        paddingTop:8,
        paddingBottom:8,
        backgroundColor:"#269DD4",
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
    }
})
