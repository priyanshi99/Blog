const topicsReducerState=[];
 const getReducer=(state=topicsReducerState,action)=>{
    switch(action.type){
      case "GET_BLOGS":
        return  action.blogs; 
      default:
        return state;
        
    }
  };


export default getReducer;

