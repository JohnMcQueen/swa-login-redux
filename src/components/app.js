import FlightHistory from 'components/flight-history'
import Login from 'components/login'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import React from 'react';

function App(props) {
  return (
    <Provider store={props.store}>
      <Router>
        <Route exact path="/" component={Login}/>
        <Route path="/flight-history" component={FlightHistory}/>
      </Router>
    </Provider>
  );
}

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;
