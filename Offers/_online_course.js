import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {callRouter} from  'packs/utility/methods.js'
import { connect } from 'react-redux';
let fltrstate;
class OnlineCourse extends React.Component{

  constructor(props){
    fltrstate=props;
      super();
  }

  callrouter(){
    callRouter("courseid");
  }
  
  createFilter(){
    let obj ={free:false,mode:"online",subject:"English",exam:"SSC"}
        obj.free=document.getElementById("exampleCheck1").checked;
        obj.mode=document.getElementById("modeid").value;
        obj.subject= document.getElementById("subjectid").value; 
        obj.exam=document.getElementById("examid").value;
        fltrstate.toggleFilter(obj); 
  }
  render(){
   
          return(
            <div>
             {/* Filter Starts*/}
               <div className="row no-gutters">
                  <div className="col-sm-1">
                    <i style={{color: "rgb(241, 163, 21)"}  } className="fa fa-search" aria-hidden="true"  onClick={this.createFilter}></i>
                  </div>
                  <div className="col-sm-2">
                     <div className="row no-gutters">
                        <div className="col-sm-7">
                           <span style={{fontSize:11}}>Free</span>
                        </div>
                        <div className="col-sm-5">
                             <input type="checkbox" className="" id="exampleCheck1"/>
                        </div>
                     </div>
                  </div>
                  <div className="col-sm-3">
                    <select className="custom-select" id="modeid" aria-label="Example select with button addon" style={{fontSize:11}}>
                      <option >Online</option>
                      <option defaultValue="1">Classroom</option>
                    </select>
                  </div>
                  <div className="col-sm-3">
                    <select className="custom-select" id="subjectid" aria-label="Example select with button addon" style={{fontSize:11}}>
                      <option >English</option>
                      <option defaultValue="1">Maths</option>
                    </select>
                  </div>
                  <div className="col-sm-2">
                    <select className="custom-select" id="examid" aria-label="Example select with button addon" style={{fontSize:11}}>
                      <option >SSC</option>
                      <option defaultValue="1">Bank</option>
                    </select>
                  </div>
               </div> <br/>
                {/* Filter Ends*/}
               {/* Cards*/}
                <div className="card bg-light  shadow p-2" style={{paddingTop:3,paddingLeft:3}} >
                  <div className=" card-body" style={{paddingTop:0,paddingLeft:1,fontSize:11,color:""}}>
                        RRB Officer Scale-I 4 August 2019 Prelims Memory Based Paper
                  </div>
                </div>
               
                <div className="card bg-light shadow p-2" style={{paddingTop:3,paddingLeft:3}}>
                  <div className=" card-body" style={{paddingTop:0,paddingLeft:1,fontSize:11,color:""}}>
                      SSC MTS 2020 Mock Tests
                  </div>
                </div>
                <div className="card bg-light shadow p-2" style={{paddingTop:3,paddingLeft:3}}>
                  <div className=" card-body" style={{paddingTop:0,paddingLeft:1,fontSize:11,color:""}}>
                  SBI PO 2020 Test Series
                  </div>
                </div>
                <div className="card bg-light shadow p-2" style={{paddingTop:3,paddingLeft:3}}>
                  <div className=" card-body" style={{paddingTop:0,paddingLeft:1,fontSize:11,color:""}}>
                  Rajasthan Police - Top Quiz
                  </div>
                </div>
                <div className="card bg-light shadow p-2" style={{paddingTop:3,paddingLeft:3}}>
                  <div className=" card-body" style={{paddingTop:0,paddingLeft:1,fontSize:11,color:""}}>
                  SSC MTS - Last Minute Quiz
                  </div>
                </div>
                <div className="card bg-light shadow p-2" style={{paddingTop:3,paddingLeft:3}}>
                    <div className="card-body" style={{paddingTop:0,paddingLeft:1,fontSize:11,color:""}}>
                          RRB Officer Scale-I 4 August 2019 Prelims Memory Based Paper
                    </div>
                    &nbsp;  <span onClick={this.callrouter} style={{ fontSize: 11,color:"rgb(241, 163, 21)"}}> &nbsp;
                              <i className="fa fa-hand-o-left" aria-hidden="true" style={{leftPadding: 1,paddingLeft:6,paddingBottom:2}}></i>
                              &nbsp;  <b>View More</b>
                            </span> 
              </div>
            </div>


          )
          
    }

}

function mapStateToProps(state){
  return {
    fltrObj: state.courseState.fltrObj,
  }
}

function mapDispatchToProps(dispatch){
  return {
      toggleFilter: fltrObj => dispatch({ type: 'COURSE_FILTER', fltrObj }),
  }
} 

 export default connect(mapStateToProps,mapDispatchToProps)(OnlineCourse);
// export default OnlineCourse;