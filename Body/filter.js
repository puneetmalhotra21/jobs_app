import React  from 'react'
import {callRouter} from  'packs/utility/methods.js'
import { connect } from 'react-redux';
let fltrstate;
let fltrStr="";

function CallFilter(props){
    
    fltrstate=props;
    return (
    <div> 
        <div className="container row no-gutters" style={{position:""}}>
                &nbsp; &nbsp; <span onClick={onFilterChange} style={{color: "#f1a315"}}><i className="fa fa-search" aria-hidden="true"></i> </span> &nbsp;&nbsp;&nbsp;&nbsp;
                <div className="col-sm-7 row no-gutters" >
                    {
                        (props.jobDsplyd==false)?
                            <div className="col-sm-2">
                                <button onClick={callrouter} type="button" className="btn btn-light btn-sm" >
                                    <span style={{color : "blue",fontSize:12}}> 
                                        <i className="fa fa-arrow-circle-left" aria-hidden="true"></i> Jobs
                                    </span>
                                </button>  
                            </div>
                            :
                            null
                    }
                    
                    <div className="col-sm-10 row no-gutters" style={{}}>
                        <div className="col-sm-3">
                            <select className="custom-select" id="allId" style={{fontSize:11,fontWeight:""}} >
                                <option defaultValue> All </option>
                                <option>Expired</option>
                            </select>
                        </div> 
                        <div className="col-sm-3">
                            <select className="custom-select" id="ctgryId" style={{fontSize:11,fontWeight:""}} >
                                <option defaultValue >Category </option>
                                <option>General </option>
                                <option>SC</option>
                                <option>ST</option>
                                <option>OBC</option>
                            </select>
                        </div>
                        <div className="col-sm-3">
                            <select className="custom-select" id="ageId" style={{fontSize:11,fontWeight:""}} >
                                <option defaultValue>-Age-</option>
                                <option>20-25</option>
                                <option>25-30</option>
                                <option>30-35</option>
                            </select>
                        </div>
                        <div className="col-sm-3">
                            <select className="custom-select" id="stateId" style={{fontSize:11,fontWeight:""}} >
                                <option defaultValue>-State-</option>
                                <option>Raj</option>
                                <option>Guj</option>
                                <option>Delhi</option>
                                <option>Bihar</option>
                                <option>Chattisgarh</option>
                                <option>WBengal</option>
                                <option>Haryana</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="col-sm-7">
                        <select className="custom-select" id="" style={{fontSize:11,marginLeft:7}}>
                                <option defaultValue>Latest</option>
                                <option>Date</option>
                                <option>Seats</option>
                        </select>
                    </div>
                    <div  className="col-sm-5">
                    </div>
                </div>
            
        </div> 
    </div>

    )
}

function callrouter(e){
    e.preventDefault();
    callRouter("jobsid");
}



function onFilterChange(){
    let str=[];
    str.length=0;
     str= 'expired' +'_'+ document.getElementById("allId").selectedIndex+'_'+   document.getElementById("allId").value+','+
             'category'+'_'+ document.getElementById("ctgryId").selectedIndex+'_'+  document.getElementById("ctgryId").value+','+
             'agelimit' +'_'+ document.getElementById("ageId").selectedIndex+'_'+   document.getElementById("ageId").value+','+
              'state'+'_'+ document.getElementById("stateId").selectedIndex+'_'+ document.getElementById("stateId").value;
    fltrStr="";
    fltrStr=fltrStr+ str;
 

fltrstate.toggleFilter(fltrStr) 
}

function mapStateToProps(state){
    return {
        fltrStr: state.jobsReducer.fltrStr,
        
    }
}

function mapDispatchToProps(dispatch){
    return {
       toggleFilter: fltrStr => dispatch({ type: 'TOGGLE_FILTER', fltrStr }),
    }
} 

export default connect(mapStateToProps,mapDispatchToProps)(CallFilter);