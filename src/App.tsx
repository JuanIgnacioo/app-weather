import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Principal from './Pages/Principal';


const App : React.FC = (props: any) => {
  return (
    <Router>
    <Switch>
      <Route exact path="/" component={Principal} />      
    </Switch>
  </Router>
  );
}

export default App;
