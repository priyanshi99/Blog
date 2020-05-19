
const Id=4;
const  Increment_user = (state = Id, action) => {
    switch (action.type) {
       case 'INCREMENT': return state + 1
      default: return state
    }
 }
 export default Increment_user;