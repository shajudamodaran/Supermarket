import firestore from '@react-native-firebase/firestore';



export const GET_CART_DATA = async () => {

  let values = []

  await firestore()
    .collection('Users').doc("1").collection("Cart")
    .get()
    .then(querySnapshot => {


      querySnapshot.forEach(documentSnapshot => {

        values.push({ "id": documentSnapshot.id, "data": documentSnapshot.data() })

      });

    });

  // for (let i in documentSnapshot.docs) {
  //   console.log(documentSnapshot.docs[i].data());
  //   values.push(documentSnapshot.docs[i].data())
  // }

  return values

}


export const ADD_ITEM_TO_CART = (obj) => {



}

export const REMOVE_ITEM_TO_CART = (obj) => {



}

export const UPDATE_CART_QUANTITY = async (itemId, count) => {

  let status = false

  await firestore()
    .collection('Users').doc("1").collection("Cart").doc(itemId)
    .update({
      qty: count,
    })
    .then(() => {
      console.log('User updated!');
      status = true
    });

  return status

}


export const GET_ITEM_DETAILS_BY_ID = async (para_id) => {

  let values = null

  await firestore()
    .collection('Products').doc("Items").collection("Vegitables")
    .where("Id", "==", `1000`)
    .get()
    .then(querySnapshot => {

      //console.log(querySnapshot.docs[0].data());
      values = querySnapshot.docs[0].data()



    });
  return values
}


export const CHECK_AVAILABILITY_IN_CART = async (para_id) => {

  let details = null
  let status=null
  let cartId=null

  try {

    let task = await firestore()
      .collection('Users').doc("1").collection("Cart")
      .where("product_Id", "==", `${para_id}`)
      .get()
      .then(querySnapshot => {

        details = querySnapshot.docs[0].data()
        cartId = querySnapshot.docs[0].id
        //console.log("Availability",querySnapshot.docs[0].id);
        return querySnapshot.docs.length !== 0 ? true : false

      });

      status=task

  } catch (error) {
    console.log();
  }

  return ({ status, details, cartId})


}






