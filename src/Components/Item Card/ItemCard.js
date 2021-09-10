import React,{useState} from 'react'
import { StyleSheet, View,Image } from 'react-native'
import { HEART_SMALL_OUTLINE } from '../../Assets/Call Asset/CallAsset'
import AddTocartButton from '../Add  to cart Button/AddTocartButton'
import { Text} from "native-base"


export default function ItemCard() {

    let [count,setCount]=useState(0)

    return (
        <View style={styles.container}>
            <View style={styles.toprow}>
                <AddTocartButton/>
                <HEART_SMALL_OUTLINE/>
            </View>

            <Image style={styles.imageView} source={require('../../Assets/Images/ginger.png')} />

            <Text fontSize="xs" >Ginger</Text>
            <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
            <Text  fontSize="sm" bold>Rs :50/-</Text>
            <Text fontSize="xs">(for 50 grams)</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        
        backgroundColor:"white",
        borderRadius:5,
        borderWidth:1,
        borderColor:"#269DD4",
        minWidth:150,
        maxWidth:150,
        height:170,maxHeight:170,
        marginLeft:5,
        paddingHorizontal:7,
        paddingVertical:7
    },
    toprow:{

       display:"flex",
       flexDirection:"row",
       alignItems:"center",
       justifyContent:"space-between"

    },
    imageView:{

        marginTop:15,
        width:"100%",
        resizeMode:"contain"

    }
})
