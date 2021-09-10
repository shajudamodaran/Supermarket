
import firestore from '@react-native-firebase/firestore';




export let testFunction=async()=>{

    const user = await firestore().collection('Users').doc('1').get();
    return user

}