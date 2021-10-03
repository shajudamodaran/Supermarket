import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, Dimensions, SafeAreaView, KeyboardAvoidingView,TouchableOpacity } from 'react-native'
import FooterTab from '../../../Components/Footer Tab/FooterTab'
import HomeHeader from '../../../Components/Headers/HomeHeader'
import ActualHomePage from '../OtherPages/ActualHomePage'
import SearchPage from '../OtherPages/SearchPage'

import { useSelector, useDispatch } from 'react-redux'
import { setActivePageRedux } from '../../../Redux/ActivePageSlice'
import AllCategories from '../OtherPages/AllCategories'
import Testpage from '../../DummyPage/Testpage'
import MyCart from '../OtherPages/MyCart'



export default function Page1() {


    let [search, setSearch] = useState(false)
    const activepageFromRedux = useSelector((state) => state.message.activepage)
    let dispatch=useDispatch()

   
    return (
        <KeyboardAvoidingView style={{ display: "flex", flexDirection: "column", flex: 1 }}>

            <HomeHeader />

            <View style={styles.container}>

              

                   
                      {
                          activepageFromRedux==="actualhome"?<ActualHomePage/>:
                           activepageFromRedux==="searchpage"?<SearchPage/>:
                           activepageFromRedux==="allcategories"?<AllCategories/>:
                           activepageFromRedux==="mycart"?<MyCart/>:
                           activepageFromRedux==="testpage"?<Testpage/>:null
                          
                      }
                    

                
            </View>
            <FooterTab />


        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        display: "flex",
        flex: 1


    },
   

});
