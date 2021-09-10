import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import ItemCard from '../Item Card/ItemCard'
import { Text, VStack, Heading, Center, NativeBaseProvider } from "native-base"

export default function TopSellingItems() {
    return (
        <View>
            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10, marginTop: 15 }}>
                <Text bold >Top Selling Items </Text>
                <Text fontSize="sm">View more </Text>
            </View>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.container}>
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                
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
