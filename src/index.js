import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';

//IMPORT BROWSER ROUTER, ROUTER AND SWITCH
import {BrowserRouter, Route, Switch} from 'react-router-dom';

//IMPORT COMPONENTS
// import App from './App';
import About from './components/About.js';
import Menu from './components/Menu.js';
import Find from './components/Findus.js';
import BaseLayout from './components/Layout.js';


ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path='/' component={About} />
        <Route path='/menu' component={Menu} />
        <Route path='/find' component={Find} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>

,document.getElementById('root'));
registerServiceWorker();
