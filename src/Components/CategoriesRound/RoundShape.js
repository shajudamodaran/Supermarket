import React from 'react'
import { StyleSheet, View ,TouchableOpacity} from 'react-native'
import { Text } from "native-base"

import { useSelector, useDispatch } from 'react-redux'
import { setActivePageRedux } from '../../Redux/ActivePageSlice'


export default function RoundShape({ model, name, icon,action }) {

    let dispatch = useDispatch()

    console.log(model);
   
   


return (

    <TouchableOpacity activeOpacity={.8} onPress={()=>{dispatch(setActivePageRedux(action))}} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginRight: 15 }}>
        <View style={model == 1 ? styles.style1 : model == 2 ? styles.style2 : model == 3 ? styles.style3 : model == 4 ? styles.style4 : null}>
            {icon}
        </View>
        <Text fontSize="xs" style={{ marginLeft: 6 }} >{name}</Text>
    </TouchableOpacity>
)


}

const styles = StyleSheet.create({
    style1: {
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: "#C3D1FF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 10,
        borderWidth: 1,
        borderColor: "#B1C2FD"
    },
    style2: {
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: "#FFE38F",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 10,
        borderWidth: 1,
        borderColor: "#FED969"
    },
    style3: {
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: "#FF9EFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 10,
        borderWidth: 1,
        borderColor: "#FF77FF"
    },
    style4: {
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: "#E9EFAF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 10,
        borderWidth: 1,
        borderColor: "#E5EE8A"
    },

})


