
const INITIAL_STATE = {
    inputVal: '',
  };

function inputReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case 'CHANGE_INPUT':
        return { ...state, inputVal: action.inputVal };
      default: return state;
    }
  }
  
  export default inputReducer;