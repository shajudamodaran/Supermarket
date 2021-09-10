import React from 'react'
import { StyleSheet, View, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { Text } from 'native-base'
import CartItem from '../../Components/CartItem/CartItem'
import LocationTop from '../../Components/LocationTop/LocationTop'
import { DELIVERY_NOTE_SVG } from '../../Assets/Call Asset/CallAsset'
import { useSelector, useDispatch } from 'react-redux'
import { testFunction } from '../../Firebase/Test'

export default function MyCart() {

    const cartFromRedux = useSelector((state) => state.cart.cart)

    let testCart=()=>{

        testFunction().then((res)=>{
            console.log(res.data());
        })

    }
    


    return (
        <KeyboardAvoidingView style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <LocationTop />

            <View style={{ display: "flex", flexDirection: "row", padding: 10 }}>
                <Text fontSize="xl">Subtotal: </Text>
                <Text fontSize="xl" bold> ₹ 70.00</Text>
            </View>

            <View style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "center" }}>
                <TouchableOpacity onPress={testCart} activeOpacity={.8} style={styles.proceedbtn}>
                    <Text fontSize="sm" bold color="white">Proceed to Buy (3 items)</Text>
                </TouchableOpacity>
            </View>

            <View style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "center" }}>
                <View style={styles.deliveryNote}>

                    <DELIVERY_NOTE_SVG />

                    <Text style={styles.deliveryText}>Normal delivery time will be 20 minutes. Actual delivery time will be
                        confirmed by the store after the order confirmation.  </Text>

                </View>
            </View>

        {
            cartFromRedux.map((obj,key)=>{

                return(
                   
                    <CartItem key={key} id={key} data={obj} />

                )
            })
        }

            
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({

    container: {

    },
    proceedbtn: {
        backgroundColor: "#269DD4",
        width: "95%",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 4,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    deliveryNote: {


        backgroundColor: 'white',
        width: "95%",
        marginTop: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 4,
        display: "flex",
        flexDirection: "row",
        elevation: 1,
        borderWidth: 1,
        borderColor: "#c4c4c4"

    },
    deliveryText:{
        fontSize:10.8,
        flexWrap:"wrap",
        maxWidth:"89%",
        marginLeft:10,
        textAlign:"justify",
        height:"100%",
        color:"#8c8c8c",
        textAlignVertical:"center"
        
    }
})
