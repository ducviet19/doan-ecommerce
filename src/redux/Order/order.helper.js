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
