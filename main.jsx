// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import JobsClass from './jobs.jsx'
import store from './Redux/Store'
import { Provider } from 'react-redux';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <JobsClass/>
    </Provider>,
    document.body.appendChild(document.createElement('div')),
  )
})


{/*<h1>Home index</h1>
<p>Find me in app/views/home/index.html.erb</p> 
 */}