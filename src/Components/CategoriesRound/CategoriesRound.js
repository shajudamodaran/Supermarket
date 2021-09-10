import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import { ALL_CATEGORY_ICON, GROCERY_ICON, MEAT_ICON, STATIONARY_ICON } from '../../Assets/Call Asset/CallAsset'
import RoundShape from './RoundShape'

let allItems = [
    { image: require('../../Assets/Images/Gro.png'), name: "Grocery" },
    { image: require('../../Assets/Images/Sta.png'), name: "Stationary" },
    { image: require('../../Assets/Images/Veg.png'), name: "Vegitables" },
    { image: require('../../Assets/Images/Fru.png'), name: "Fruites" },
    { image: require('../../Assets/Images/Meat.png'), name: "Meats" },
    { image: require('../../Assets/Images/Ele.png'), name: "Electronics" },
    { image: require('../../Assets/Images/Bak.png'), name: "Backery" },
    { image: require('../../Assets/Images/bev.png'), name: "Beverages" },
    { image: require('../../Assets/Images/Bea.png'), name: "Beauty" },
]




export default function CategoriesRound() {


    let count=1
    let getModelCount=(para)=>{

        
        para>3?count=1:count=count+1

        return count
    }


    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.container}>
            <View style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center"
            }}>
                <RoundShape model={1} name="All" icon={<ALL_CATEGORY_ICON />} action="allcategories" />
                    {
                         
                        allItems.map((obj,key)=>{

                          

                            return(

                                <RoundShape key={key} model={getModelCount(count)} name={obj.name} icon={<Image source={obj.image} style={styles.imageView}></Image>} />

                            )

                        })

                    }

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {

        paddingHorizontal: 1,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: "#d4d4d4",
        elevation: 1,
    },
    imageView: {

       
        width: "80%",
        resizeMode: "contain",
        maxHeight: 70


    }
})
