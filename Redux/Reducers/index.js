import { combineReducers } from 'redux';
import inputReducer  from './inputReducer';
import  dateReducer from './dateReducer'
import  jobListReducer  from './jobListReducer'
import jobsReducer from './jobsReducer'
import toggleReducer from './toggleReducer'
import courseReducer from './courseReducer'

const rootReducer = combineReducers({
    dateState: dateReducer,
    inputState: inputReducer,
    jobListState:jobListReducer,
    jobsReducer:jobsReducer,
    toggleState:toggleReducer,
    courseState:courseReducer,
   
});
export default rootReducer;