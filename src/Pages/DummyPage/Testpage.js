import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { ADD_DUMMY_PRODUCT, GET_LAST_PRODUCT_ID, GET_LAST_PRODUCT_NUMBER, GET_TOP_SELLING_DATA } from '../../Firebase/Test'


export default function Testpage() {

    let handleEventLastNumber = () => {

        // GET_LAST_PRODUCT_NUMBER("Vegitables").then((res) => {
        //     console.log("Last ID=>", res)
        // })

        GET_LAST_PRODUCT_ID("Vegitables").then((res) => {
               console.log("Last ID=>", res)
       })

    }


    let handleEventAddDummy = async() => {

        let dummy_data = {
            number: await GET_LAST_PRODUCT_NUMBER("Vegitables"),
            Id: await GET_LAST_PRODUCT_ID("Vegitables"),
            offer_name:null,
            offer_price:null,
            category:"Vegitables",
            name:"Tomato",
            qty:1,
            unit:"Kg",
            top_selling:false
        }
        //console.log("okkk");
       try {
        ADD_DUMMY_PRODUCT(dummy_data)
           
       } catch (error) 
       {
           console.log(error);
       }


    }


    let handleEventGetData=()=>{

        GET_TOP_SELLING_DATA("Vegitables").then((res)=>{
            console.log(res);
        })

    }


    return (
        <View style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <TouchableOpacity onPress={() => { handleEventLastNumber() }} activeOpacity={0.8} style={styles.button1}>
                <Text style={{ color: "white" }}>Get Last Product Number</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { handleEventAddDummy() }} activeOpacity={0.8} style={styles.button1}>
                <Text style={{ color: "white" }}>Add Dummy Product</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { handleEventGetData() }} activeOpacity={0.8} style={styles.button1}>
                <Text style={{ color: "white" }}>Get data</Text>
            </TouchableOpacity>


        </View>
    )
}

const styles = StyleSheet.create({

    button1: {

        padding: 10,
        backgroundColor: "green",
        width: "90%",
        borderRadius: 5,
        marginTop: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    }

})
