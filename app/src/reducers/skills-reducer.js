const data = require('../db/learn_it_database.json')
console.log('skills', data.skills)


/* ACTION TYPES */
const GOT_SKILLS = 'GOT_SKILLS'

/* ACTION CREATORS */
const gotSkills = (skills) => {
    return { type: GOT_SKILLS, skills }
}

/* THUNK CREATORS */
export const getSkills = (item) => async dispatch => {
  try {
      // const skillData = await firebase.firestore().collection('skills').get()
      // dispatch(gotSkills(skillData.docs))
      dispatch(gotSkills(data.skills))
    } catch (err) {
    console.error(err)
  }
}

export default function(skills = [], action) {
  switch (action.type) {
    case GOT_SKILLS:
      return [...action.skills]
    default:
      return skills
  }
}
