import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { GET_ITEM_DETAILS_BY_ID } from '../../Firebase/Functions/CartFirebaseFunctions';
import CartRemoveButtobn from '../Cart Remove Button/CartRemoveButtobn'
import IncreaseDecreaseButton from '../Increase Decrease Button/IncreaseDecreaseButton'

export default function CartItem({ data }) {

    console.log(data);

    let [productData, setProductData] = useState(null)


    useEffect(() => {

        //console.log("Id===>", data.data.product_Id);

        GET_ITEM_DETAILS_BY_ID(data.data.product_Id).then((res) => {

            //console.log("Product Data ==",res);
            setProductData(res)

        })

    }, [])


    return (
        <>
            {
                productData !== null ?

                    <View style={styles.container}>

                        <View style={styles.imageView}>
                            <Image source={{ uri: productData != null ? productData.images[0] : null }} style={styles.image} ></Image>
                        </View>

                        <View style={styles.detailsView}>
                            <Text style={{ fontSize: 14 }}>{productData ? productData.name : ""}</Text>
                            <Text style={{ fontSize: 14, fontWeight: "bold", marginTop: 5 }}>₹ {productData ? productData.mrp : ""} </Text>
                            <Text style={{ marginTop: 5, fontSize: 12, color: productData ? productData.availability ? "green" : "Red" : "green", fontWeight: "bold" }}>{productData ? productData.availability ? "In stock" : "Out of stock" : null}</Text>

                            <View style={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginTop: 13
                            }}>
                                <IncreaseDecreaseButton initial={data.data.qty} id={data.id}/>
                                <CartRemoveButtobn />

                            </View>

                        </View>
                    </View>
                    : console.log("product Data null")
            }
        </>
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
        borderBottomWidth: .5,
        borderBottomColor: "#949494",
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
