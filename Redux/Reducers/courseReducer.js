const INITIAL_STATE = {

  fltrObj:{free:false,
            mode:"Classroom",
            subject:"English",
            exam:"SSC"
        },
  }
  


  function courseReducer(state = INITIAL_STATE, action) {
      switch (action.type){
        case 'COURSE_FILTER':
       return { ...state,  fltrObj:action.fltrObj};
        default: return state;
      }
    }
    

export default courseReducer;