
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './components/Home/Home';

import NoMatch from './components/NoMatch/NoMatch';
import TeamDetails from './components/TeamDetails/TeamDetails';


function App() {

  return (
     <Router>
       <Switch>
         <Route path="/home">
         <Home></Home>
         </Route>
         <Route path="/about/:id">
        <TeamDetails></TeamDetails>
         </Route>
         <Route exact path="/">
           <Home></Home>

         </Route>
         <Route path="*">
         <NoMatch></NoMatch>
         </Route>
       </Switch>
     </Router>
    
  );
}

export default App;
