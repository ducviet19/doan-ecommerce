import { firestore } from './../../firebase/ultils'

export const handleAddProduct = product => {
    return new Promise((resolve, reject) => {
        firestore
            .collection('products')
            .doc()
            .set(product)
            .then(() => {
                resolve()
            })
            .catch(err => {
                reject(err);
            })
    });
}

export const handleFetchProducts = () => {
    return new Promise((resolve, reject) => {
        firestore
            .collection('products')
            .get()
            .then(snapshot => {
                const productsArray = snapshot.docs.map(doc => {
                    return {
                        ...doc.data(),
                        documentID: doc.id
                    }
                });
                resolve(productsArray);
            })
            .catch(err => {
                reject(err);
            })
    })
}

export const handleFetchDetailProduct = (documentID) => {
    return new Promise((resolve, reject) => {
        firestore.collection('products').doc(documentID)
            .get()
            .then(snapshot => {
                if (snapshot.exists) {
                    resolve({
                      ...snapshot.data(),
                      documentID: documentID
                    });
                  }

            })
            .catch(err => {
                reject(err);
            })
    })
}


export const handleDeleteProduct = documentID => {
    return new Promise((resolve, reject) => {
        firestore.collection('products').doc(documentID).delete()
        .then(() => {
            console.log(documentID)
            resolve();
        })
        .catch(err => {
            reject(err);
        }) 
    })
}


export const handleEditProduct = (product ,id ) => {
    return new Promise((resolve, reject) => {
        firestore
            .collection('products')
            .doc(id)
            .set(product)
            .then(() => {
                resolve()

            })
            .catch(err => {
                reject(err);
            })
    });
}