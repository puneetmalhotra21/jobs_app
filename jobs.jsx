import React from 'react'
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,useState,useHistory 
  } from "react-router-dom";

import PropTypes from 'prop-types'
import SearchBar from './Header/_search_bar.js'
import JobDashboard from './Noticeboard/_job_dashboard.jsx'   
import Notification from './Noticeboard/_notification.jsx'
import Charts from './Noticeboard/charts.js'
import JobCards from './Body/_job_cards.js'   
import AdmitCards from './Body/admitcards.js'
import ExamMaterial from './Body/exammaterial.js'
import Coupons from './Body/coupons.js'
import Courses  from './Body/courses.js'
import CallFilter from  './Body/filter.js'
import {navPaths,pathcompMap} from './datalayer/data.js'

class JobsClass extends React.Component{
    constructor(){
      super();
          this.state={
            navPaths:navPaths(),
            pathcompMap:pathcompMap(),
            jobDsplyd:true
      }
      this.toggleJobs = this.toggleJobs.bind(this);
      this.hideJobs = this.hideJobs.bind(this);
    }
    
    toggleJobs(){
        if(this.state.jobDsplyd==true ){
            this.setState({
                jobDsplyd: false,
            }); 
        }
    }
    hideJobs(){
            this.setState({
                jobDsplyd: true,
            });
    }
    
    render(){
          return(
           
                <div>   
                    <div className="jumbotron " style={{marginBottom:-30,marginTop:0}} >
                        <div className="row" style={{marginTop:-30}}>
                            <div className="col-sm-2" style={{marginTop:-0}}>
                                <h3>Job Value</h3> 
                            </div>
                            <div className="col-sm-10">
                                <SearchBar/> 
                            </div>
                        </div>
                    </div>
                    <Router >
                        <div>
                            <nav className="navbar navbar-expand-sm bg-dark " style={{height:35}}>
                                <a className="navbar-brand" href="#" style={{fontSize:13,color:"white"}}><i className="fa fa-home fa-2x" aria-hidden="true"></i></a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                                    <ul className="navbar-nav" style={{fontSize:11}}>
                                        {this.state.navPaths.map(navp => (
                                            <li key="" className="nav-item">
                                               {
                                                    (navp.name!='Jobs') ? 
                                                        <Link id={navp.id} className="nav-link" href="#" style={{color:"white",fontSize:13}} 
                                                            to={navp.path} onClick={this.toggleJobs}>{navp.name}
                                                        </Link>
                                                     :
                                                     <Link id={navp.id} className="nav-link" href="#" style={{color:"white",display:"none"}} 
                                                            to={navp.path} onClick={this.hideJobs}>{navp.name}
                                                        </Link>
                                                        
                                                }
                                            </li>
                                        ))} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </ul>
                                </div>  
                            </nav>
                            <div style={{backgroundColor:"rgb(241, 163, 21)",height:2.1}}></div>
                            <div className="container-fluid" style={{marginTop:20}}>
                                <div className="row no-gutters">
                                    <div className="col-sm-3">
                                    <Charts/> <br/>   <Notification/>    
                                        
                                    </div> 
                                    <div className="col-sm-6 no-gutters">
                                     <CallFilter jobDsplyd={this.state.jobDsplyd} />
                                        <Switch>
                                            { this.state.pathcompMap.map(jobs =>
                                                <Route path={jobs.path} exact>  
                                                        <div className="row">
                                                            <div className="col-sm-9">
                                                                <div>
                                                                    {   
                                                                        (jobs.path=='/examtrls') ?
                                                                            <ExamMaterial/> : 
                                                                                (jobs.path=='/admitcards') ?
                                                                                <AdmitCards/> : 
                                                                                    (jobs.path=='/coupons') ? 
                                                                                        <Coupons/> :
                                                                                            (jobs.path=='/courses') ?
                                                                                                <Courses/> :    
                                                                                                <JobCards /> 
                                                                    }
                                                                </div>  
                                                            </div>
                                                            <div className="col-sm-3">
                                                            </div>
                                                        </div> 
                                                
                                                </Route>
                                                )
                                            }   
                                            <div className="col-sm-6">
                                                <div className="row">
                                                    <div className="col-sm-9">
                                                        <Route path="/" exact>
                                                         <JobCards />
                                                        </Route>
                                                        <Route path="/admitcards" component={AdmitCards}/>
                                                        <Route path="/examtrls" component={ExamMaterial}/>
                                                        <Route path="/coupons" component={Coupons}/>
                                                        <Route path="/courses" component={Courses}/>
                                                    </div>
                                                    <div className="col-sm-3">
                                                    </div>
                                                </div>
                                            </div>
                                        </Switch> 
                                    </div>
                                    <div className="col-sm-3">
                                         <JobDashboard/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Router>  
                </div>
          )
          
    }
}

    function mapStateToProps(state){
        return {
          
            
        }
    } 


    function mapDispatchToProps(dispatch){
        return {
            toggleCard: dateCard => dispatch({ type: 'TOGGLE_DateCard', dateCard }),
        }
    } 


  export default connect(mapStateToProps,mapDispatchToProps)(JobsClass);