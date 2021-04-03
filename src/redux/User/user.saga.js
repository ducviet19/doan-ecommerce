import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import { auth, getCurrentUser, GoogleProvider, handleUserProfile } from "../../firebase/ultils";
import { clearCart, removeCart } from "../Cart/cart.action";
import { setUser, signInSuccess, userError } from "./user.action";
import { signOutUserSuccess } from "./user.action";
import { fetchUser, setUsers } from './user.action'
import { handleAddUser, handleDeleteUser, handleEditUser, handleFetchDetailUser, handleFetchUser } from "./user.helpers";
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
    yield put(
      clearCart()
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
    return;
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
    const { user } = yield auth.signInWithPopup(GoogleProvider);
    yield getSnapshotFromUserAuth(user);

  } catch (error) {

  }

}


export function* googleSignStart() {
  yield takeLatest(userTypes.GOOGLE_SIGN_IN_START, googleSignIn)
}

export function* fetchUserSaga() {
  try {
    const user = yield handleFetchUser();
    yield put(
      setUsers(user)
    );

  } catch (err) {
    // console.log(err);
  }
}

export function* onFetchUser() {
  yield takeLatest(userTypes.FETCH_USER, fetchUserSaga);
}

export function* deleteUser({ payload }) {
  try {
    yield handleDeleteUser(payload);
    yield put(
      fetchUser()
    )

  } catch (error) {

  }
}

export function* onDeleteUser() {
  yield takeLatest(userTypes.DELETE_USER, deleteUser)
}

export function* fetchUserId({ payload }) {
  try {
    const userEdit = yield handleFetchDetailUser(payload);
    yield put(
      setUser(userEdit)
    );
  } catch (error) {

  }
}
export function* onFetchUserId() {
  yield takeLatest(userTypes.FETCH_USER_ID, fetchUserId)
}

export function* editUser({ payload, id }) {
  try {

    console.log('payload edit user', payload)
    console.log('id edit user', id)
    const user = yield handleEditUser(payload, id);

    yield put(
      fetchUserId(user)
    )
  }
  catch (err) {

  }

}


export function* onEditUser() {
  yield takeLatest(userTypes.EDIT_USER, editUser)

}

export function* addUser({ payload }) {

  try {
    console.log('payload add user', payload)
    const timestamp = new Date();
    yield handleAddUser({
      ...payload,
      AdminUserUID: auth.currentUser.uid,
      createdDate: timestamp
    });
    yield put(
      fetchUser()
    );


  } catch (err) {
    // console.log(err);
  }

}
export function* onAddUser() {
  yield takeLatest(userTypes.ADD_NEW_USER, addUser);
}

export default function* userSagas() {
  yield all([
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutUserStart),
    call(onSignUpUserStart),
    call(googleSignStart),
    call(onFetchUser),
    call(onDeleteUser),
    call(onFetchUserId),
    call(onEditUser),
    call(onAddUser)

  ])
}