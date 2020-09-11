import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {callRouter} from  'packs/utility/methods.js'
class BooksThirdParty extends React.Component{

    constructor(){
      super();
    }
    callrouter(e){
      e.preventDefault();
      callRouter("couponid");
    }

    render(){
          return(
            <div>
               Books
               &nbsp; <span onClick={this.callrouter} style={{ fontSize: 11}}> &nbsp;View More</span> <i className="fa fa-hand-o-left" aria-hidden="true" style={{leftPadding: 1,paddingLeft:6,paddingBottom:2}}></i>
            </div>

          )
          
    }

}

export default BooksThirdParty;