import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { firebaseConfig } from './config'



firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(GoogleProvider);

export const handleUserProfile = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const { uid } = userAuth;


    const useRef = firestore.doc(`users/${uid}`);
    const snapshot = await useRef.get();

    if(!snapshot.exists) {
        const { displayName , email} = userAuth;
        const timestamp = new Date();

        try {
            await useRef.set({
                displayName,
                email,
                createDate: timestamp,
                ...additionalData
            })
            
        } catch (error) {
            
        }
    }

    return useRef;
}