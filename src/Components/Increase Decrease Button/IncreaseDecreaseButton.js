import React,{useState,useEffect}  from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch } from 'react-redux';
import { UPDATE_CART_QUANTITY } from '../../Firebase/Functions/CartFirebaseFunctions';
import { refreshCart } from '../../Redux/CartSlice';

export default function IncreaseDecreaseButton({id,initial}) {

    let [count,setCount]=useState(1)
    let dispatch = useDispatch()

    useEffect(() => {

        setCount(initial)
        
       
    }, [])

    let handleCount=(para)=>{

        if(para=="add")
        {
            //console.log(id);

           
            UPDATE_CART_QUANTITY(id,count+1).then((res)=>{

                dispatch(refreshCart())
                setCount(count+1)
                console.log(res);

            })
            
        }
        else
        {
          

            UPDATE_CART_QUANTITY(id,count-1<1?1:count-1).then((res)=>{

                dispatch(refreshCart())
                count<=1?setCount(1):setCount(count-1)
                console.log(res);

            })

            
        }

    }
    return (
        <View style={styles.container}>

            <TouchableOpacity onPress={()=>{handleCount("decrease")}} activeOpacity={.8} style={styles.left}>
                <Text style={styles.btntext}>-</Text>
            </TouchableOpacity>

            <View style={styles.center}>
                <Text >{count}</Text>
            </View>

            <TouchableOpacity onPress={()=>{handleCount("add")}} activeOpacity={.8} style={styles.right}>
                <Text style={styles.btntext}>+</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {

        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },

    left: {
        paddingHorizontal: 10,
        paddingVertical: 3,
        backgroundColor: "#269DD4",
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5

    },

    right: {
        paddingHorizontal: 10,
        paddingVertical: 3,
        backgroundColor: "#269DD4",
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5

    },


    center: {
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 15,
        paddingVertical: 3,
        borderColor: "#269DD4",
        borderWidth: .5
    },
    btntext:{
        fontSize:15,
        color:"white"
    }
})
