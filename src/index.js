import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import BooksApp from './App.js'
import './index.css'

//ReactDOM.render(<App />, document.getElementById('root'))
ReactDOM.render(<BrowserRouter>
    <BooksApp />
  </BrowserRouter>, document.getElementById('root'));
