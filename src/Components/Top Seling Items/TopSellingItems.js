import React,{useEffect,useState} from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import ItemCard from '../Item Card/ItemCard'
import { Text, VStack, Heading, Center, NativeBaseProvider } from "native-base"
import { GET_TOP_SELLING_DATA } from '../../Firebase/Test'

export default function TopSellingItems() {

    let [topData,setTopData]=useState(null)

    useEffect(() => 
    {
       load_top_data()
       
    }, [])


    let load_top_data=async()=>{

        GET_TOP_SELLING_DATA().then((res)=>{
            setTopData(res)
        })

    }


    return (
        <View>
            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10, marginTop: 15 }}>
                <Text bold >Top Selling Items </Text>
                <Text fontSize="sm">View more </Text>
            </View>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.container}>
                
               {
                   topData!==null?

                   topData.map((obj,key)=>{


                    return(
                        <ItemCard key={key} obj={obj} />
                    )
                   })

                   :null
               }
                
                
            </ScrollView>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {

        paddingHorizontal: 0,
        paddingVertical: 10,
        marginTop:5


    }
})
