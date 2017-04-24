import React from 'react'
import ReactDOM from 'react-dom'

import './stylesheet.css'
import 'jquery/dist/jquery'
//import $ from 'jquery'
import 'bootstrap/dist/js/npm'
import 'bootstrap/dist/css/bootstrap'
import 'bootstrap/dist/css/bootstrap-theme'

import Konfigurator from './components/Konfigurator'



ReactDOM.render(<Konfigurator />, document.getElementById('container'))
