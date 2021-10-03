
import firestore from '@react-native-firebase/firestore';




export let testFunction = async () => {

    const user = await firestore().collection('Users').doc('1').get();
    return user

}


export const ADD_DUMMY_PRODUCT = ({ number, Id, category, name, offer_name, offer_price, qty, unit, top_selling }) => {

    let dummy_product = {
        Id,
        category,
        availability: true,
        images: ["1", "2", "3"],
        mrp: 50,
        name,
        offer: { offer_name, offer_price },
        qty,
        unit,
        top_selling
    }

    firestore()
        .collection('Products').doc('Items').collection(category)
        .doc(number.toString())
        .set({
            Id,
            category,
            availability: true,
            images: ["1", "2", "3"],
            mrp: 50,
            name,
            offer: { offer_name, offer_price },
            qty,
            unit,
            top_selling
        })
        .then(() => {
            console.log('Data added!');
        });

}


export let GET_LAST_PRODUCT_NUMBER = async (category) => {

    let id = 0;

    await firestore()
        .collection('Products').doc('Items').collection(category)
        .orderBy('Id', 'desc')
        .limit(1)
        .get()
        .then(querySnapshot => {
            //console.log(querySnapshot.docs.length);
            if (querySnapshot.docs.length !== 0) {
                id = querySnapshot.docs[0].id
            }
        });


    return Math.abs(id) + 1


}

export let GET_LAST_PRODUCT_ID = async (category) => {

    let id = 0;

    await firestore()
        .collection('Products').doc('Items').collection(category)
        .orderBy('Id', 'desc')
        .limit(1)
        .get()
        .then(querySnapshot => {
            //console.log(querySnapshot.docs.length);
            if (querySnapshot.docs.length !== 0) {
                id = querySnapshot.docs[0].data().Id
                //console.log(querySnapshot.docs[0].data().Id);
            }
        });


    return Math.abs(id) + 1


}


export let GET_TOP_SELLING_DATA= async(category="Vegitables")=>{

    let dataArray=[]

    await firestore()
        .collection('Products').doc('Items').collection(category)
        .where('top_selling', '==',true)
        .get()
        .then(querySnapshot => {
            //console.log(querySnapshot.docs.length);
            if (querySnapshot.docs.length !== 0) {
                //id = querySnapshot.docs[0].id
               // console.log(querySnapshot.docs);

               querySnapshot.forEach(documentSnapshot => 
                {
               
                dataArray.push({'Number': documentSnapshot.id,data:documentSnapshot.data()})
              });


            }
        });


        return dataArray


}