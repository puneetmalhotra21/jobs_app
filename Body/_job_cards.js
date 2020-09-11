import React from 'react'
import { connect } from 'react-redux';

class JobCards extends React.Component{
    
  constructor(props){
      super(props);
      this.state={
        tempSrch:'okay'
      }
  }

    render(){
      return(
        <div className=""> 
          <div className="row no-gutter">
            <div className="" style={{paddingTop:1}}>
                {this.props.jobLstShw.filter((job) =>{
                  return ( job.name.toUpperCase().startsWith(this.props.srchFltrObj.srchVal.toUpperCase()) && (this.props.srchFltrObj.qualVal==''? job.qual:job.qual==this.props.srchFltrObj.qualVal) )
                  }).map(job => (
                    <ul style={{listStyleType: "none"}}>
                      <li key={job.id}>
                        <div className="card shadow">
                          <div className="card-header  row no-gutters" style={{height:40}}>
                              <div className="col-sm-1">
                                <span className="float-left" style={{fontWeight:500,fontSize: 12,color:"black",fontWeight:"bold"}}> 
                                    {job.name} 
                                </span> 
                                
                              </div>
                              <div className="col-sm-1  row">
                              </div>
                              <div className="col-sm-10">
                                  <span className="badge badge-pill badge-info" style={{fontFamily:"sans-serif",fontSize:9.5,backgroundColor:"#6c757d"}}>
                                      Seats: {job.seats} 
                                  </span>
                                  <span className="badge badge-pill badge-info" style={{fontFamily:"sans-serif",fontSize:9.5,backgroundColor:"rgb(13 147 161)"}}>
                                      Age: {job.agelimit} years
                                  </span>
                                  <span className="badge badge-pill badge-info" style={{fontFamily:"sans-serif",fontSize:9.5,backgroundColor:"rgb(125 161 13)"}}>
                                      Edu: {job.qual}
                                  </span>
                              </div>
                            
                          </div>
                          <div className="card-body  " style={{height:100,padding:8,width:506}}>
                            <div id="cardDetails" style={{display: this.props.dateList.includes(job.id) ? 'block' : 'none' }}> 
                                <div className="col-sm-12 row no-gutters" >
                                  <div className="col-sm-6">
                                    <h6 className="card-title h1 small font-weight-bold  " style={{fontSize: 11}}>{job.postname}</h6>
                                    </div>  
                                  <div className="col-sm-4">
                                  </div>
                                  <div className="col-sm-2">
                                      <span  id={job.id} onClick={e=>this.props.toggleCard(e.target.id)} style={{fontSize:11,float:"right",
                                            color:"black",textDecoration: "underline"}}>
                                          <b>Imp dates</b> 
                                      </span>
                                  </div>
                                </div>
                                <div className="col-sm-12">
                                  <p className="card-text" style={{fontSize: 11,color:""}}>ASome quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>  
                            <div id="cardDateDtls" style={{display: !this.props.dateList.includes(job.id) ? 'block' : 'none' }}>
                              <div className="col-sm-12 row no-gutters" >
                                <div className="col-sm-6">
                                  <h6 className="card-title h1 small font-weight-bold  " style={{fontSize: 11}}>Important Dates</h6>
                                </div>
                                <div className="col-sm-4">
                                </div>
                                <div className="col-sm-2">
                                    <span id={job.jobDateID}  onClick={e=>this.props.toggleCard(e.target.id)} style={{fontSize:11,float:"right",
                                          color:"black",textDecoration: "underline"}}>
                                          Back to details 
                                    </span>
                                </div>
                              </div>
                              <div className="col-sm-12">
                                <p className="card-text" style={{fontSize: 11,color:"#1e1edb"}}>
                                      Important Dates
                                </p>  
                              </div>
                            </div>  
                          </div>
                          <div className="card-footer row no-gutters" style={{height:27,padding:0}}>
                              <div className="col-sm-4">
                                <span style={{fontSize:11,marginLeft:14}}>  
                                  <span style={{color:"#000000"}}> {job.state}</span> <i className="fa fa-map-marker" aria-hidden="true"></i> 
                                </span>  
                              </div>
                              <div className="col-sm-4">
                                  <span style={{fontSize:11}}> 
                                  <b>Last Date:</b> {job.posteddate}&nbsp;&nbsp; <i className="fa fa-calendar" aria-hidden="true">  </i>
                                  </span>  
                              </div>
                              <div className="col-sm-4">
                                <button type="button" className="btn btn-link float-right " style={{padding:0}}>
                                  <span style={{fontSize:11,color:"#1e1edb"}}>
                                    read more..
                                  </span>
                                </button> 
                              </div>
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
  
 
  
  function mapStateToProps(state){
    return {
        dateList: state.dateState.shwDateCards,
        jobs: state.jobListState.jobs, 
        jobLstShw: state.jobListState.jobLstShw, 
        fltrStr: state.jobsReducer.fltrStr,
        srchFltrObj: state.jobListState.srchFltrObj,
        
    }
  } 


  function mapDispatchToProps(dispatch){
    return {
          toggleCard: dateCard => dispatch({ type: 'TOGGLE_DateCard', dateCard }),
    }
  } 


export default connect(mapStateToProps,mapDispatchToProps)(JobCards);
  