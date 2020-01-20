// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Home from '../components/Todo List/Index/Home'
import 'font-awesome/css/font-awesome.min.css'

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('todo_lists_data')
  const data = JSON.parse(node.getAttribute('data'))
  ReactDOM.render(
    <Home todo_lists={data} />,
    document.body.appendChild(document.createElement('div')),
  )
})
