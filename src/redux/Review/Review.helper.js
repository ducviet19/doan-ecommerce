import { firestore } from "../../firebase/ultils";

export const handleAddReview = (review,id) => {
    return new Promise((resolve, reject) => {
        firestore
            .collection('products')
            .doc(id)
            .update(review)
            .then(() => {
                resolve() 
            })
            .catch(err => {
                reject(err);
            })
    });
}