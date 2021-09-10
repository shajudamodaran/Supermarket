import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default function AllCategories() {

    let allItems = [
        { image: require('../../../Assets/Images/Gro.png'), name: "Grocery" },
        { image: require('../../../Assets/Images/Sta.png'), name: "Stationary" },
        { image: require('../../../Assets/Images/Veg.png'), name: "Vegitables" },
        { image: require('../../../Assets/Images/Fru.png'), name: "Vegitables" },
        { image: require('../../../Assets/Images/Meat.png'), name: "Meats" },
        { image: require('../../../Assets/Images/Ele.png'), name: "Electronics" },
        { image: require('../../../Assets/Images/Bak.png'), name: "Backery" },
        { image: require('../../../Assets/Images/bev.png'), name: "Beverages" },
        { image: require('../../../Assets/Images/Bea.png'), name: "Beauty" },
    ]

    return (
        <View style={styles.container}>

            {
                allItems.map((obj,key) => {
                    return (
                        <View key={key} style={styles.card}>
                            <Image source={obj.image} style={styles.imageView}></Image>
                            <Text>{obj.name}</Text>
                        </View>
                    )
                })
            }


        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,

        padding: 5,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap"
    },
    card: {
        width: "32%",
        height: 120,
        margin: 2,
        borderRadius: 5,
        borderWidth: .8,
        backgroundColor: "#f5f5f5",
        borderColor: "#A6A6A6",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent:"space-between",
        paddingVertical:10
    },
    imageView: {

        marginTop: 10,
        width: "90%",
        resizeMode:"contain",
        maxHeight:70
       

    }
})
