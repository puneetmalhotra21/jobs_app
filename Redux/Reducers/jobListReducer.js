import {joblst,jobLstShw,Jobs} from './data.js'
const INITIAL_STATE = {
    joblst:joblst(),
    jobLstShw:jobLstShw(),
    jobs:Jobs(),
    srchStr:'',
    qualStr:'',
    srchFltrObj:{srchVal:'',qualVal:''}
  };

  function jobListReducer(state=INITIAL_STATE,action){
    switch (action.type){
        case 'JOBLST' :
            return INITIAL_STATE.joblst;
        case 'JobLST_SHW':
            return  INITIAL_STATE.jobLstShw;
        case 'JOBS':
            return  INITIAL_STATE.jobs;    
        case 'CREATE_Filter':
            return  { ...state, srchStr: action.srchStr };
        case 'CREATE_QUALVAL':
              return  { ...state, qualStr: action.qualStr }; 
        case 'CREATE_SEARCH':
            let tempObj={srchVal:'',qualVal:''};
            tempObj.srchVal=state.srchStr;
            tempObj.qualVal=state.qualStr;
            return  { ...state, srchFltrObj: tempObj};      
        default: return state;
    }
  } 

  export default jobListReducer;


