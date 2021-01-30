import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import Content from './components/Content';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
      <Navbar />
      <Content />
  </React.StrictMode>,
  document.getElementById('root')
);