import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CategoriesRound from '../../../Components/CategoriesRound/CategoriesRound'
import LocationTop from '../../../Components/LocationTop/LocationTop'
import TopSellingItems from '../../../Components/Top Seling Items/TopSellingItems'

export default function ActualHomePage() {
    return (
        <View>
            <LocationTop />
            <CategoriesRound />
            <TopSellingItems />
        </View>
    )
}

const styles = StyleSheet.create({})
