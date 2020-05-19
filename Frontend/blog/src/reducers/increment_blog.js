

const id =4;
 const Increment_blog= (state = id, action) => {
    switch (action.type) {
       case 'INCREMENT_BLOG': return state + 1
       default: return state
    }
  }
  export default Increment_blog;