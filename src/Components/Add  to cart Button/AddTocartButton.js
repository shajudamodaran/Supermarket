import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ADD_ICON_ROUND, CART_ICON_SMALL } from '../../Assets/Call Asset/CallAsset'
import { CHECK_AVAILABILITY_IN_CART } from '../../Firebase/Functions/CartFirebaseFunctions'
import IncreaseDecreaseButton from '../Increase Decrease Button/IncreaseDecreaseButton'

export default function AddTocartButton({ id }) {

    let [count, setCount] = useState(null)
    let [cartId,setCartId]=useState(null)

    console.log(count);

    useEffect(() => {


        CHECK_AVAILABILITY_IN_CART(id).then((res) => {

            console.log(res);
            if (res.status) {
                setCount(res.details.qty)
                setCartId(res.cartId)
            }

        })

    }, [])


    return (
        <>
            {
                count != null ?
                    <IncreaseDecreaseButton/>
                    ://if not in cart.....................................................
                    <View style={styles.container}>
                        <CART_ICON_SMALL />
                        <Text style={{ color: "#269DD4", fontWeight: "500" }}>Add</Text>
                        <ADD_ICON_ROUND />
                    </View>

            }
        </>
    )
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: "white",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#269DD4",
        width: "60%",
        height: 25,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 5

    }
})
