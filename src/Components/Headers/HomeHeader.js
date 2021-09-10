
import React,{useState} from 'react'
import { StyleSheet, Text,TextInput, View,StatusBar,TouchableOpacity } from 'react-native'
import { AllCateIcon, CartIcon, DrawerIcon, ProfileIcon, SearchIcon } from '../../Assets/Call Asset/CallAsset'

import { useSelector, useDispatch } from 'react-redux'
import { setActivePageRedux } from '../../Redux/ActivePageSlice'
import { useNavigation } from '@react-navigation/core'




export default function HomeHeader() {

    let dispatch=useDispatch()
    let [value,setValue]=useState("")
    const navigation=useNavigation()
    


    let handleChange=(value)=>{

        setValue(value)

        if(value==="")
        {
            dispatch(setActivePageRedux("actualhome"))
        }
        else{
            dispatch(setActivePageRedux("searchpage"))

        }


    }

    return (
        <>
        <View style={{backgroundColor:"#269DD4", paddingTop:StatusBar.currentHeight+10,padding:15, display:"flex",flexDirection:"row",justifyContent:"space-between"}}> 
            
           <TouchableOpacity onPress={()=>{navigation.toggleDrawer()}}><DrawerIcon/></TouchableOpacity>

           <Text style={{fontWeight:"300", color:"white",fontSize:20}}>Devamart</Text>

           <View style={{display:"flex",flexDirection:"row"}}>
               <View style={{marginRight:25}}><ProfileIcon/></View>
               <TouchableOpacity activeOpacity={.8} onPress={()=>{navigation.navigate('cart')}} style={{marginRight:10}}><CartIcon/></TouchableOpacity>
           </View>

        </View>

        <View style={{backgroundColor:"#269DD4",paddingLeft:18,paddingRight:18,paddingBottom:15}}> 

            <TouchableOpacity activeOpacity={1} style={styles.searchBox}>
            <SearchIcon/>
            <TextInput value={value} onChangeText={(value)=>{handleChange(value)}} style={styles.textBox} placeholder="What aer you looking for" placeholderTextColor="#a8a8a8" ></TextInput>
            <TouchableOpacity onPress={()=>{dispatch(setActivePageRedux("allcategories"))}}><AllCateIcon/></TouchableOpacity>
            </TouchableOpacity>
            
        </View>
        </>
    )
}

const styles = StyleSheet.create({

    searchBox:{
        borderRadius:5,
        borderWidth:2,
        borderColor:"#E0E0E0",
        backgroundColor:"white",
        color:"black",
        paddingLeft:10,
        paddingRight:10,
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        height:42

    },
    textBox:{

        color:"black",
        marginLeft:5,
        flex:1,
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
    }
})
