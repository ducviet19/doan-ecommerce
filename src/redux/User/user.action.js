
import { auth, handleUserProfile ,GoogleProvider } from '../../firebase/ultils';
import userTypes from './user.type'


export const emailSignInStart = userCredentials => ({
    type: userTypes.EMAIL_SIGN_IN_START,
    payload: userCredentials
  });




  export const signOutUserStart = () => ({
    type: userTypes.SIGN_OUT_USER_START
  });
  
  export const signOutUserSuccess = () => ({
    type: userTypes.SIGN_OUT_USER_SUCCESS
  });




export const signInSuccess = user => ({
    type: userTypes.SIGN_IN_SUCCESS,
    payload: user
})

export const checkUserSession = () => ({
    type: userTypes.CHECK_USER_SESSION
})











export const resetAllAuthForm = () => ({
    type: userTypes.RESET_AUTH_FORM
})

export const setCurrentUser = (user) => ({
    type: userTypes.SET_CURRENT_USER,
    payload: user
})

// export const loginUser = ({ email, password }) => async (dispatch) => {
//     try {
//         await auth.signInWithEmailAndPassword(email, password);
//         dispatch({
//             type: userTypes.SIGN_IN_SUCCESS,
//             payload: true
//         })

//     } catch (error) {

//     }
// }

export const registerUser = ({displayName,email,password,confirmPassword}) => async dispatch => {
    if(password !== confirmPassword ){
        const err = ['Password not match'];
        dispatch({
            type: userTypes.SIGN_UP_ERROR,
            payload: err
        });
        return ;
    }
    try {
        const {user} = await auth.createUserWithEmailAndPassword(email,password);
        handleUserProfile(user, {
            displayName
        });
        
    } catch (error) {
        
    }
}

export const signInWithGoogle = () => async dispatch => {

    try {
      await auth.signInWithPopup(GoogleProvider)
      .then(() => {
          dispatch({
              type: userTypes.SIGN_IN_SUCCESS,
              payload: true
          })
      })
    } catch (error) {
        
    }
    
} ;