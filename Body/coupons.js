import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {couponslst} from  'packs/datalayer/data.js'
import CallFilter from  './filter.js'
class Coupons extends React.Component{
  constructor(props){
    super(props);
    this.state={
      coupons:couponslst(),
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
          
             
              {this.state.coupons.map(job => (
                <ul style={{listStyleType: "none"}}>
                  <li key={job.id}>
                    <div className="card shadow-sm">
                       
                      <div className="card-header " style={{height:40,fontSize: 11,color:"#dba608"}}  >
                        <span className="text-warning  float-left" style={{fontWeight:500,fontSize: 11,color:"#dba608"}}> {job.name} Exam Material</span>
                        <span className="float-right" style={{fontSize: 11}}> <b>Offer:</b>{job.discount} </span>
                      </div>
                      <div className="card-body ">
                        <h6 className="card-title h1 small font-weight-bold" style={{fontSize: 11}}>{job.qual}</h6>
                        <p className="card-text" style={{fontSize: 11}}>{job.detail} Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      </div>
                      <div className="card-footer bg-light " style={{height:45}}>
                         <button type="button" className="btn btn-link float-right " style={{padding:0}}>read more..</button> 
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
  
export default Coupons;
  