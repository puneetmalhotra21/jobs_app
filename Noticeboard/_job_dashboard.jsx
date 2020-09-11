import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import OnlineCourse from 'packs/Offers/_online_course.js'
import BooksThirdParty from 'packs/Offers/_books_third_party.js'
import FacultyNotes from 'packs/Offers/_faculty_notes.js'


function JobDashboard (){
          return(
            <div>
              <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" style={{color:"black"}} data-toggle="tab" href="#home"><span style={{fontSize: 13}}><b> Courses</b>&nbsp;<i className="fa fa-id-card" style={{color:"orange"}} aria-hidden="true"></i></span></a>
                    </li>
                    <li className="nav-item">
                       <a className="nav-link" style={{color:"black"}} data-toggle="tab" href="#menu1"><span style={{fontSize: 13}}><b>Books</b>&nbsp;<i className="fa fa-book" style={{color:"orange"}} aria-hidden="true"></i></span></a>
                    </li>
                    <li className="nav-item">
                       <a className="nav-lin  k" style={{color:"black"}} data-toggle="tab" href="#menu2"><span style={{fontSize: 13}}><b>Faculty Notes</b>&nbsp;<i className="fa fa-bullseye" style={{color:"orange"}} aria-hidden="true"></i></span></a>
                    </li>
              </ul>
                
                <div className="tab-content">
                  <div id="home" className="container tab-pane active"><br/>
                     <OnlineCourse/> 
                  </div>
                  <div id="menu1" className="container tab-pane fade"><br/>
                     <BooksThirdParty/>
                  </div>
                  <div id="menu2" className="container tab-pane fade"><br/>
                      <FacultyNotes/>
                  </div>
                </div>
            </div>

          )

}
export default  JobDashboard;