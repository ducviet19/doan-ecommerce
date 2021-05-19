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



export const handleFetchProductsRelative = (category) => {

    console.log('category',category)
    return new Promise((resolve, reject) => {
        firestore
            .collection('products').where("category","==",category)
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


export const handleFetchProductsHome = () => {
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


export const handleFetchProductFuture = ({startAfterDoc, persistProducts = [] }) => {
    return new Promise((resolve, reject) => {
        let ref = firestore.collection('products').where("featureProduct" , "==" , true).limit(3)
        if (startAfterDoc) ref = ref.startAfter(startAfterDoc);
        ref.get()
        .then(snapshot => {
            const totalCount = snapshot.size;
            const data = [
                ...persistProducts,
                ...snapshot.docs.map(doc => {
                    return {
                        ...doc.data(),
                        documentID: doc.id
                    }
                })
            ];
            resolve({
                data,
                queryDoc: snapshot.docs[totalCount - 1],
                isLastPage: totalCount < 1
            });
        })
        .catch(err => {
            reject(err);
        })
    })
}



export const handleFetchBestSeller = ({startAfterDoc, persistProducts = [] }) => {
    return new Promise((resolve, reject) => {
        let ref = firestore.collection('products').where("numOrder" , ">=" , 20).limit(3)
        if (startAfterDoc) ref = ref.startAfter(startAfterDoc);
        ref.get()
        .then(snapshot => {
            const totalCount = snapshot.size;
            const data = [
                ...persistProducts,
                ...snapshot.docs.map(doc => {
                    return {
                        ...doc.data(),
                        documentID: doc.id
                    }
                })
            ];
            resolve({
                data,
                queryDoc: snapshot.docs[totalCount - 1],
                isLastPage: totalCount < 1
            });
        })
        .catch(err => {
            reject(err);
        })
    })
}

export const handleFetchProducts = ({ filterType, startAfterDoc, persistProducts = [] }) => {

    return new Promise((resolve, reject) => {
        const pageSize = 3;

        let ref = firestore.collection('products').orderBy("createdDate").limit(pageSize);
        if (filterType) ref = ref.where('category', '==', filterType);
        if (startAfterDoc) ref = ref.startAfter(startAfterDoc);
        ref
            .get()
            .then(snapshot => {
                const totalCount = snapshot.size;
                const data = [
                    ...persistProducts,
                    ...snapshot.docs.map(doc => {
                        return {
                            ...doc.data(),
                            documentID: doc.id
                        }
                    })
                ];
                resolve({
                    data,
                    queryDoc: snapshot.docs[totalCount - 1],
                    isLastPage: totalCount < 1
                });
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
            
                resolve();
            })
            .catch(err => {
                reject(err);
            })
    })
}


export const handleEditProduct = (product, id) => {
    return new Promise((resolve, reject) => {
        firestore
            .collection('products')
            .doc(id)
            .update(product)
            .then(() => {
                resolve()

            })
            .catch(err => {
                reject(err);
            })
    });
}