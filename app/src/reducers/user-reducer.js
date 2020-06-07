/* ACTION TYPES */
const GET_USER = 'GET_USER'
const LOGOUT_USER = 'LOGOUT_USER'

/* ACTION CREATORS */
const gotUser = user => ({type: GET_USER, user})
const logOutUser = user => ({type: LOGOUT_USER})

/* THUNK CREATORS */
export const getUser = (item) => {
    return async (dispatch) => {
        try {
            const user = await firebase.auth().currentUser
            console.log('user', user, 'inside user-reducer')
            if (user) {
              user.loggedIn = true
            }
            dispatch(gotUser(user))
        } catch (error) {
            console.error(error)
        }
    }
}

export const logout = () => async dispatch => {
  try {
    await auth.signOut()
    dispatch(logOutUser())
    history.push('/log-in')
  } catch (err) {
    console.error(err)
  }
}

/* REDUCER */
export default function(user = { loggedIn: false }, action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    case LOGOUT_USER:
      return {}
    default:
      return user
  }
}
