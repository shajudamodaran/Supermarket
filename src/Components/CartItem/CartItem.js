import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import CartRemoveButtobn from '../Cart Remove Button/CartRemoveButtobn'
import IncreaseDecreaseButton from '../Increase Decrease Button/IncreaseDecreaseButton'

export default function CartItem({data,id}) {

    console.log(id);


    return (
        <View style={styles.container}>

            <View style={styles.imageView}>
                <Image source={data.image} style={styles.image} ></Image>
            </View>

            <View style={styles.detailsView}>
                <Text style={{fontSize:14}}>7-Up Soft Drink - Lemon  2 ltr</Text>
                <Text style={{fontSize:14,fontWeight:"bold",marginTop:5}}>₹ 70.00 </Text>
                <Text style={{marginTop:5,fontSize:12,color:"green",fontWeight:"bold"}}>In stock</Text>

                <View style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop:13
                }}>
                    <IncreaseDecreaseButton />
                    <CartRemoveButtobn/>
                   
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {

        width: "100%",
        padding: 5,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth:.5,
        borderBottomColor:"#949494",
    },
    imageView: {

        flex: .35,
        padding: 10,
        height: 140,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"

    },
    detailsView: {

        flex: .65,
        padding: 10,
        height: 140,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
       
    },
    image: {


        height: "100%",
        width: "100%",
        resizeMode: "contain"

    }
})
