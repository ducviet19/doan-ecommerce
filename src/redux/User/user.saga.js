import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import { auth, handleUserProfile } from "../../firebase/ultils";
import { signInSuccess } from "./user.action";
import userTypes from "./user.type";




export function* getSnapshotFromUserAuth(user) {
    try {
        const useRef = yield call(handleUserProfile, { userAuth: user });
        const snapshot = yield useRef.get();

        yield put(
            signInSuccess({
                id: snapshot.id,
                ...snapshot.data()
            })
        )
          
    } catch (error) {

    }
}

export function* emailSignIn({ payload: { email, password } }) {
    try {
         const { user } = yield auth.signInWithEmailAndPassword(email, password);
         yield getSnapshotFromUserAuth(user)





    } catch (error) {

    }
}


export function* onEmailSignInStart() {
    yield takeLatest(userTypes.EMAIL_SIGN_IN_START, emailSignIn)
}

export default function* userSaga() {
    yield all(call[onEmailSignInStart])
}