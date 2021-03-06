import { firestore } from './../../firebase/ultils'

export const handleFetchUser = () => {

    return new Promise((resolve, reject) => {
        firestore.collection('users')
            .get()
            .then(snapshot => {
                const usersArray = snapshot.docs.map(doc => {
                    return {
                        ...doc.data(),
                        documentID: doc.id
                    }
                });
                resolve(usersArray);
            })
            .catch(err => {
                reject(err);
            })
    })
}

export const handleDeleteUser = documentID => {
    return new Promise((resolve, reject) => {
        firestore.collection('users').doc(documentID).delete()
            .then(() => {
                resolve();
            })
            .catch(err => {
                reject(err);
            })
    })
}
