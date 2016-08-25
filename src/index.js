import React from 'react'
import ReactDOM from 'react-dom'

import { configureStore } from './store/store'
import Root from './containers/Root'

//Css
import './main.scss'
const store = configureStore()

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
)
