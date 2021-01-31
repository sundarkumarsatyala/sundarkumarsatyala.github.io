import React from 'react';
import ReactDOM from 'react-dom';
import MyNavbar from './components/MyNavbar';
import MyCarousel from './components/MyCarousel';
import Content from './components/Content';
import Decks from './components/Decks';
import MyJumbotron from './components/MyJumbotron';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
      <MyNavbar />
      <MyJumbotron />
      <Decks />
      <MyCarousel />
      <Content />
  </React.StrictMode>,
  document.getElementById('root')
);