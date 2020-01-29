import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './views/Home';
import HowItWorks from './views/HowItWorks';
import PastTrials from './views/PastTrials';
import PageNotFound from './views/PageNotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/how-it-works" component={HowItWorks} />
        <Route path="/past-trials" component={PastTrials} />
        <Route path="/page-not-found" component={PageNotFound} />
        <Redirect from="/" to="/page-not-found" />
      </Switch>
    </Router>
  );
}

export default App;
