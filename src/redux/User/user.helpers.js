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
