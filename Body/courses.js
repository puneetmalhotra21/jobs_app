import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {courseslst} from  'packs/datalayer/data.js'
import CallFilter from  './filter.js'
class Courses extends React.Component{
  constructor(props){
    super(props);
    this.state={
      courseslst:courseslst(),
        jobVal:"ABC"
    };
  }
    
  componentWillReceiveProps(nextProps) {
    this.setState({ coupons: nextProps.coupons });  
  }
  
  render(){
    return(
      <div className="">
        <div className="row no-gutter">
          <div className="">
          
              {this.state.courseslst.map(job => (
                <ul style={{listStyleType: "none"}}>
                  <li key={job.id}>
                    <div className="card shadow-sm">
                      <div className="card-header bg-light " style={{height:40}}  >
                        <span className="text-warning  float-left" style={{fontWeight:500,fontSize: 11}}> {job.name} Course Exam Material</span>
                        <span className="float-right" style={{fontSize: 11}}> <b>Offer1:</b>{job.discount} </span>
                      </div>
                      <div className="card-body ">
                        <h6 className="card-title h1 small font-weight-bold " style={{fontSize: 11}}>{job.qual}</h6>
                        <p className="card-text" style={{fontSize: 11}}>{job.detail} Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
  
export default Courses;
  