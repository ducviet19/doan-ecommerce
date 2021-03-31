import { firestore } from './../../firebase/ultils'

export const handleAddOrder = data => {
    return new Promise((resolve, reject) => {
        firestore
            .collection('order')
            .doc()
            .set(data)
            .then(() => { 
                resolve()
            })
            .catch(err => {
                reject(err);
            })
    });
}


export const handleGetUserOrderHistory = uid => {
    return new Promise((resolve, reject) => {

        console.log(uid)
        let ref = firestore.collection('order').orderBy('datePlaced');

        ref = ref.where('userID', '==' ,uid);

        ref.get()
        .then(snap => {
            const data = [
                ...snap.docs.map(doc => {
                    return {
                        ...doc.data(),
                        documentID : doc.id
                    }
                })
            ];

            resolve({data})
        })
        .catch(err => {
            reject(err);
        })
    });
}

export const handleGerOrder = orderID => {
    return new Promise((resolve, reject) => {
        firestore
            .collection('order')
            .doc(orderID)
            .get()
            .then(snap => { 
               if(snap.exists) {
                   resolve({
                       ...snap.data(),
                       documentID: orderID
                   })
               }
            })
            .catch(err => {
                reject(err);
            })
    });
}