import React from 'react'
import { StyleSheet, Text, View,ScrollView } from 'react-native'
import NotificationComponentSimple from './Components/Modules/Notification Module/NotificationComponentSimple'

export default function JobPortal() {
    return (
        <View style={styles.body}>
            <ScrollView style={styles.scrollView} >
                <View style={{width:"100%",height:"100%",alignItems:"center",marginTop:10}}>

                <NotificationComponentSimple></NotificationComponentSimple>
               

                </View>

               

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,

    },
    scrollView: {

        marginHorizontal: 0,
        backgroundColor: "#E5E5E5",



    },
})
