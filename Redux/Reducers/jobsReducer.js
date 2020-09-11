import {joblst,jobLstShw,Jobs} from './data.js'

const INITIAL_STATE = {
    fltrStr:"",
    jobLstShw:jobLstShw(),
  };
  
let initArray=[];  
let jbLst_temp =INITIAL_STATE.jobLstShw;
let Obj={expired:false,category:"",Age:"",state:""};
let fltrArray;
let fltrVal=[];
let jobs= [];

  function jobsReducer(state = INITIAL_STATE, action) {
      switch (action.type){
        case 'TOGGLE_FILTER':
          initArray=[];
          initArray.length=0;
          Obj={expired:false,category:"",Age:"",state:""};
          initArray=action.fltrStr.split(',');
          filterJobs(initArray);
        return { ...state,  fltrStr:action.fltrStr};
        default: return state;
      }
    }
    
  function filterJobs(initArray){
    for(var i=0; i<initArray.length;i++){
          var tempArray= initArray[i].split('_');
            if(tempArray[1]!=0){
                if(tempArray[0]=="expired"){
                  Obj.expired=true;
                }else if(tempArray[0]=="category"){
                  Obj.category=tempArray[2];
                }else if(tempArray[0]=="agelimit"){
                  Obj.Age=tempArray[2];
                }else if(tempArray[0]=="state"){
                  Obj.state=tempArray[2];
                }
            } 
      }
  }
  
    export default jobsReducer;