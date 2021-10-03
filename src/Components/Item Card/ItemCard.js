import React,{useState,useEffect} from 'react'
import { StyleSheet, View,Image } from 'react-native'
import { HEART_SMALL_OUTLINE } from '../../Assets/Call Asset/CallAsset'
import AddTocartButton from '../Add  to cart Button/AddTocartButton'
import { Text} from "native-base"
import { CHECK_AVAILABILITY_IN_CART } from '../../Firebase/Functions/CartFirebaseFunctions'


export default function ItemCard({obj}) {

    let [count,setCount]=useState(0)
    console.log(obj);



    return (
        <View style={styles.container}>
            <View style={styles.toprow}>
                <AddTocartButton id={obj.data.Id}/>
                <HEART_SMALL_OUTLINE/>
            </View>

            <Image style={styles.imageView} source={{uri:obj.data.images[0]}} />

            <Text fontSize="xs" >{obj.data.name}</Text>
            <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
            <Text  fontSize="sm" bold>Rs :{obj.data.mrp}/-</Text>
            <Text fontSize="xs">(for {obj.data.qty} {obj.data.unit})</Text>
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

        width:70,height:100,
        marginTop:15,
        width:"100%",
        maxHeight:'50%',
        resizeMode:"contain"

    }
})
