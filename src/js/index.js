//import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// import withScrollReveal from "react-scrollreveal";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components


//render your react application

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app')
);
// ScrollReveal().reveal(".showcase-container");
// ScrollReveal().reveal(".news-cards", { delay: 500 });
// ScrollReveal().reveal(".news-cards-two", { delay: 500 });
// ScrollReveal().reveal(".cards-banner", { delay: 500 });
// ScrollReveal().reveal(".cards-banner-two", { delay: 500 });
