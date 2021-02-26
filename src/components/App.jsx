import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cards from '../containers/Cards';
import Statistics from '../containers/Statistics';
import Layout from '../containers/Layout';
import '../assets/styles/App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Cards} />
          <Route exact path='/statistics' component={Statistics} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
