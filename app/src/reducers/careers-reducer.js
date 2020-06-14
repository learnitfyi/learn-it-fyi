/* ACTION TYPES */
const GOT_CAREERS = 'GOT_CAREERS'

/* ACTION CREATORS */
const gotCareers = (careers) => {
    return { type: GOT_CAREERS, careers }
}

/* THUNK CREATORS */
export const getCareers = (item) => async dispatch => {
  try {
      const careerData = await firebase.firestore().collection('careers').get()
      dispatch(gotCareers(careerData.docs))
    } catch (err) {
    console.error(err)
  }
}

export default function(careers = [], action) {
  switch (action.type) {
    case GOT_CAREERS:
      return [...action.careers]
    default:
      return careers
  }
}
