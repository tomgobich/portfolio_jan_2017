import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import App from './components/App';
import PortfolioDetails from './components/PortfolioDetails';
import NotFound from './components/NotFound';
import './css/bootstrap.css';
import './css/main.css';

ReactDOM.render((
  <BrowserRouter basename="/tiy-portfolio">
    <div>
      <Match exactly pattern="/" component={App} />
      <Match exactly pattern="/portfolio/:portfolioID" component={PortfolioDetails} />
      <Miss component={NotFound} />
    </div>
  </BrowserRouter>
), document.getElementById('root'));
