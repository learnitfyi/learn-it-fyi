/* ACTION TYPES */
const GET_LOGGED_IN_USER = 'GET_LOGGED_IN_USER'
const LOG_IN_USER = 'LOG_IN_USER'
const LOG_OUT_USER = 'LOG_OUT_USER'
// const USER_SIGN_UP = 'USER_SIGN_UP'

/* ACTION CREATORS */
const gotUser = user => ({type: GET_LOGGED_IN_USER, user})
const logInUser = user => ({type: LOG_IN_USER, user})
const logOutUser = user => ({type: LOG_OUT_USER})
// const userSignUp = user => ({type: USER_SIGN_UP})

/* THUNK CREATORS */
export const getUser = (item) => {
    return async (dispatch) => {
        try {
            const user = await firebase.auth().currentUser
            if (user) {
              user.loggedIn = true
            }
            dispatch(gotUser(user))
        } catch (error) {
            console.error(error)
        }
    }
}

export const logIn = (email, password) => async dispatch => {
  try {
    const user = await firebase.auth().signInWithEmailAndPassword(email, password)
    if (user) {
      user.loggedIn = true
    }
    dispatch(logInUser(user))
    window.location.pathname = '/admin'
  } catch (err) {
    alert('username and/or password incorrect')
    console.error(err)
  }
}

export const logOut = () => async dispatch => {
  try {
    await firebase.auth().signOut()
    dispatch(logOutUser())
    dispatch(push('/log-in'));
  } catch (err) {
    console.error(err)
  }
}

// export const addSignedUpToStore = () => async dispatch => {
//   try {
//     dispatch(logInUser(userSignUp))
//     dispatch(push('/admin'));
//   } catch (err) {
//     console.error(err)
//   }
// }

/* REDUCER */
export default function(user = { loggedIn: false }, action) {
  switch (action.type) {
    case GET_LOGGED_IN_USER:
      return action.user
    case LOG_IN_USER:
      return action.user
    case LOG_OUT_USER:
      return { loggedIn: false }
    default:
      return user
  }
}
