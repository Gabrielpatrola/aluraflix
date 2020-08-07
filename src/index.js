import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CadastroVideo from './pages/cadastro/Video'
import Home from './pages/Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const PageNotFound = () => (<div>404</div>);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
