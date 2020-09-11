import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {callRouter} from  'packs/utility/methods.js'
class Notification extends React.Component{
    
    constructor(){
      super();
      this.state={
          sec:sec,
          notifData:notifData
      }
    }
    
    callrouter(e){
        e.preventDefault();
        callRouter("admtcard");
    }

    render(){
          return(
            <div>
                {/*temp-start*/}
                {/*temp-end*/}

                <div className="card-deck">
                    <div className="card bg-light shadow-sm">
                    
                        <span className="text-center" style={{fontSize:11}}><strong><u>Notification</u></strong></span>
                        <div className="card-body" style={{padding:0}}>
                            <ul style={{listStyle: "none",paddingLeft:10,fontSize:11}}>
                                <li>Latest Notification</li>
                                <li>Upcoming Notification</li>
                                <li>Interview</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card  bg-light shadow-sm">
                        <span className="text-center" style={{fontSize:11}}><strong><u>Announcement</u></strong></span>
                        <div className="card-body" style={{padding:0}}>
                            <ul style={{listStyle: "none",paddingLeft:10,fontSize:11}} >
                                <li onClick={this.callrouter} >Admit Card &nbsp; <span className="badge badge-pill badge-success">50-New</span></li>
                                <li>Exam Result &nbsp;  <span className="badge badge-pill badge-info">34-New</span> </li>
                                <li>Exam Date</li>
                                <li>Answer Key</li>
                                <li>Cut off Mark</li>
                                <li>Written Mark</li>
                                <li>Interview Result</li>
                            </ul>
                        </div>
                    </div>
                </div><br/>
                <div className="card-deck ">
                    <div className="card bg-light shadow-sm">
                        <span className="text-center" style={{fontSize:11}}><strong><u>Others</u></strong></span>
                        <div className="card-body" style={{padding:0}}>
                            <ul style={{listStyle: "none",paddingLeft:10,fontSize:11}}>
                                <li>Eligiblity</li>
                                <li>Syllabus</li>
                                <li>Exam Pattern</li>
                                <li>Selection Process</li>
                                <li>Previous Papers</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card  bg-light shadow-sm">
                        <span className="text-center" style={{fontSize:11}}><strong><u>Exam</u></strong></span>
                        <div className="card-body" style={{padding:0}}>
                            <ul style={{listStyle: "none",paddingLeft:10,fontSize:11}}>
                                <li>10th</li>
                                <li>12th &nbsp; <span className="badge badge-pill badge-success">114-New</span></li>
                                <li>Graduate</li>
                                <li>Post Graduate</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
  
          )
          
    }
  }

const sec=["Notification","Announcement","Others","Exam"];  
const notifData =[
    {id:1,name:"Latest Notification",sec:"Notification"},
    {id:1,name:"Upcoming Notification",sec:"Notification"},
    {id:2,name:"Interview",sec:"Notification"},
   
    {id:3,name:"Admit Card",sec:"Announcement"},
    {id:4,name:"Exam Result",sec:"Announcement"},
    {id:5,name:"Exam Date",sec:"Announcement"},
    {id:6,name:"Answer Key",sec:"Announcement"},
    {id:7,name:"Cut off Mark",sec:"Announcement"},
    {id:8,name:"Written Mark",sec:"Announcement"},
    {id:9,name:"Interview Result",sec:"Announcement"}


  ];
 
  export default Notification;