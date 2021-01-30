import React from 'react';
import ReactDOM from 'react-dom';
import Navigationbar from "./components/Navigationbar";
import Jumbotron from "./components/Jumbotron";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Navigationbar />
    <Jumbotron />
  </React.StrictMode>,
  document.getElementById('root')
);