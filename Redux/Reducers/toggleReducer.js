const INITIAL_STATE = {
    shwSrchShdw: false,
  };

function toggleReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case 'TOGGLE_Search_SHADOW':
        return  { ...state, shwSrchShdw: action.srchShdw };
      default: return state;
    }
  }
  
  export default toggleReducer;