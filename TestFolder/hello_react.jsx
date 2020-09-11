// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.
import data1 from './data.jsx'
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Main from '../main.jsx'

const Hello = props => (
  <div>Hello1 {props.name}! {Main}</div>
)

Hello.defaultProps = {
  name: 'David'
}

Hello.propTypes = {
  name: PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello  />,
    document.body.appendChild(document.createElement('div')),
  )
})
