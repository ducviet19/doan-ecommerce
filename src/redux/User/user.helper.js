import { firestore } from "../../firebase/ultils";


export const handleFetchUsers = () => {
    return new Promise((resolve, reject) => {
        firestore
            .collection('users')
            .get()
            .then(snapshot => {
                const userArray = snapshot.docs.map(doc => {
                    return {
                        ...doc.data(),
                        documentID: doc.id
                    }
                });
                resolve(userArray);
            })
            .catch(err => {
                reject(err);
            })
    })
}