import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import { auth, getCurrentUser, GoogleProvider, handleUserProfile } from "../../firebase/ultils";
import { signInSuccess, userError } from "./user.action";
import { signOutUserSuccess } from "./user.action";

import userTypes from "./user.type";




export function* getSnapshotFromUserAuth(user, additionalData = {}) {
  try {
    const userRef = yield call(handleUserProfile, { userAuth: user, additionalData });
    const snapshot = yield userRef.get();
    yield put(
      signInSuccess({
        id: snapshot.id,
        ...snapshot.data()
      })
    );

  } catch (err) {
    // console.log(err);
  }
}

export function* emailSignIn({ payload: { email, password } }) {
  try {
    console.log("emailSignIn")
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);

  } catch (err) {
    // console.log(err);
  }
}
export function* onEmailSignInStart() {
  yield takeLatest(userTypes.EMAIL_SIGN_IN_START, emailSignIn);

}




export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);

  } catch (err) {
    // console.log(err);
  }
}

export function* onCheckUserSession() {
  yield takeLatest(userTypes.CHECK_USER_SESSION, isUserAuthenticated)
}


export function* signOutUser() {
  try {

    yield auth.signOut();
    yield put(
      signOutUserSuccess()
    )

  } catch (err) {
    // console.log(err);
  }
}


export function* onSignOutUserStart() {
  yield takeLatest(userTypes.SIGN_OUT_USER_START, signOutUser)
}

export function* signUpUser({ payload: {
  displayName,
  email,
  password,
  confirmPassword
} }) {

  if (password !== confirmPassword) {
    const err = ['Password not match'];
    yield put(
      userError(err)
    )
    return ;
  }
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    const additionData = { displayName };
    yield getSnapshotFromUserAuth(user, additionData);
    // yield call(handleUserProfile, { userAuth: user ,additionalData: {displayName} })

  } catch (error) {

  }
}

export function* onSignUpUserStart() {
  yield takeLatest(userTypes.SIGN_UP_USER_START, signUpUser)
}

export function* googleSignIn() {

  try {
     const {user} = yield auth.signInWithPopup(GoogleProvider);
     yield getSnapshotFromUserAuth(user);
       
} catch (error) { 

}

}


export function* googleSignStart() {
  yield takeLatest(userTypes.GOOGLE_SIGN_IN_START , googleSignIn)
}

export default function* userSagas() {
  yield all([
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutUserStart),
    call(onSignUpUserStart),
    call(googleSignStart)

  ])
}