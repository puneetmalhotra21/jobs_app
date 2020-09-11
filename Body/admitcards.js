import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {admitlst} from 'packs/datalayer/data.js'
import CallFilter from  './filter.js'
class AdmitCards extends React.Component{

    constructor(props){
      super(props);
      this.state={
        admitcards: admitlst()
      };
    }
    
    componentWillReceiveProps(nextProps) {
      this.setState({ admitcards: nextProps.admitcards });  
    }
  
  render(){
    return(
      <div className="">
        <div className="row no-gutter">
          <div className="">
         
              {this.state.admitcards.map(job => (
                <ul style={{listStyleType: "none"}}>
                  <li key={job.id}>
                    <div className="card shadow-sm">
                      <div className="card-header bg-light " style={{height:40}}  >
                        <span className="text-warning  float-left" style={{fontWeight:500,fontSize: 11}}> {job.name} Admit Card</span>
                        <span className="float-right" style={{fontSize: 11}}> <b>Posted on:</b>{job.lastdate} </span>
                      </div>
                      <div className="card-body ">
                        <h6 className="card-title h1 small font-weight-bold " style={{fontSize: 11}}>{job.qual}</h6>
                        <p className="card-text" style={{fontSize: 11}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      </div>
                      <div className="card-footer bg-light " style={{height:45}}>
                         <button type="button" className="btn btn-link float-right " style={{padding:0}}><span style={{fontSize:11}}>read more..</span></button> 
                      </div>
                    </div>
                  </li>
                </ul> 
              ))}
          </div>
        </div>
      </div> 
    )
  }
  }
  
  // CSS Style
  const divStyle = {
  };
  // data setup
  // const joblst=["SSC","Bank","Army"];
  
  /* const Jobs =[
    {id:1,name:"SSC",state:"Raj",detail:"SSC in details",qual:"Any Graduate, Other Course",lastdate:"7/12/2020"},
    {id:2,name:"Bank",state:"Guj",detail:"Bank in details",qual:"BEd",lastdate:"17/9/2020"},
    {id:3,name:"Army",state:"Chennai",detail:"Army in details",qual:"12th",lastdate:"17/2/2021"}
  ]; */
  
   export default AdmitCards;
  