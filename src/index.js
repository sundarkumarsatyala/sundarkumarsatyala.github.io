import React from 'react';
import ReactDOM from 'react-dom';
import Navigationbar from "./components/Navigationbar";
import Jumbotron1 from "./components/Jumbotron1";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Navigationbar />
    <Jumbotron1 />
  </React.StrictMode>,
  document.getElementById('root')
);