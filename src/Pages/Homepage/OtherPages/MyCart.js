import React, { useState, useEffect } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { DELIVERY_NOTE_SVG } from '../../../Assets/Call Asset/CallAsset'
import CartItem from '../../../Components/CartItem/CartItem'
import CartFooter from '../../../Components/Footer Tab/CartFooter'
import LocationTop from '../../../Components/LocationTop/LocationTop'
import { GET_CART_DATA, GET_ITEM_DETAILS_BY_ID } from '../../../Firebase/Functions/CartFirebaseFunctions'
import { testFunction } from '../../../Firebase/Test'

import firestore from '@react-native-firebase/firestore';
import { addItemToCartRedux } from '../../../Redux/CartSlice'


export default function MyCart() {

    const cartFromRedux = useSelector((state) => state.cart.cart)
    const cartRefreshFlagRedux = useSelector((state) => state.cart.cart_refresh_flag_redux)
    let dispatch = useDispatch()

    let [cartData,setCartData]=useState(null)
   

    
    useEffect(() => {

        //console.log("Getting Cart");
        GET_CART_DATA().then((res)=>{
            //console.log(res);
            setCartData(res)
            
        })

    }, []);

    useEffect(() => {
   
        refresh()

    }, [cartRefreshFlagRedux]);


    let refresh=()=>{

        GET_CART_DATA().then((res)=>{
            //console.log(res);

            setCartData(res)
            
        })

    }


    return (
        <KeyboardAvoidingView style={{ display: "flex", flexDirection: "column", flex: 1 }}>


            <LocationTop />
            <View style={styles.container}>


                <ScrollView style={styles.scrollView}>
                    <View style={{ flex: 1, flexDirection: "column", padding: 10 }}>

                        <View style={styles.priceContainer}>
                            <Text style={{ fontSize: 20 }}>Subtotal :</Text>
                            <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 10 }}>₹ 70.00</Text>
                        </View>

                        <TouchableOpacity activeOpacity={.6} style={styles.proceedBtn}>
                            <Text style={{ fontWeight: "500", color: "white", fontSize: 14 }}>Proceed to Buy (3 items)</Text>
                        </TouchableOpacity>


                        <View style={styles.deliveryNoteContainer}>
                            <DELIVERY_NOTE_SVG />
                            <Text style={{ fontSize: 11, color: "#8D8D8D", flex: 1, flexWrap: 'wrap', marginLeft: 10 }}>
                                Normal delivery time will be 20 minutes. Actual delivery time will be confirmed by the store after the order confirmation.
                            </Text>
                        </View>

                        {
                            cartData!==null?

                            cartData.map((obj,key)=>{

                                //console.log("Maping",obj);

                                return(
                                    <CartItem key={key} data={obj} />
                                )
                            })

                            :console.log("No Cart Data")
                        }



                    </View>
                </ScrollView>
                <CartFooter />
            </View>



        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        display: "flex",
        flex: 1
    },
    scrollView: {
        backgroundColor: 'white',

    },
    priceContainer: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        marginTop: 5
    },
    proceedBtn: {
        backgroundColor: "#269DD4",
        padding: 12,
        borderRadius: 5,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 15,
        elevation: 5
    },
    deliveryNoteContainer: {

        backgroundColor: "white",
        elevation: 3,
        borderColor: "#ff0000",
        marginTop: 15,
        padding: 10,
        borderRadius: 3,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"


    }

})
