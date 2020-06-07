/* ACTION TYPES */
const GET_LOGGED_IN_USER = 'GET_LOGGED_IN_USER'
const LOG_IN_USER = 'LOG_IN_USER'
const LOG_OUT_USER = 'LOG_OUT_USER'

/* ACTION CREATORS */
const gotUser = user => ({type: GET_LOGGED_IN_USER, user})
const logInUser = user => ({type: LOG_IN_USER, user})
const logOutUser = user => ({type: LOG_OUT_USER})

/* THUNK CREATORS */
export const getUser = (item) => {
    return async (dispatch) => {
        try {
            const user = await firebase.auth().currentUser
            if (user) {
              user.loggedIn = true
              dispatch(gotUser(user))
            } else {
              dispatch(gotUser({ loggedIn: false }))
            }
        } catch (error) {
            console.error(error)
        }
    }
}

export const logIn = (email, password) => async dispatch => {
  try {
    const user = await firebase.auth().signInWithEmailAndPassword(email, password)
    dispatch(logInUser(user))
  } catch (err) {
    alert('username and/or password incorrect')
    console.error(err)
  }
}

export const logOut = () => async dispatch => {
  try {
    await firebase.auth().signOut()
    dispatch(logOutUser())
  } catch (err) {
    console.error(err)
  }
}

/* REDUCER */
export default function(user = { displayName: '', loggedIn: false }, action) {
  switch (action.type) {
    case GET_LOGGED_IN_USER:
      return {...action.user, loggedIn: true}
    case LOG_IN_USER:
      return {...action.user, loggedIn: true}
    case LOG_OUT_USER:
      return user
    default:
      return user
  }
}
