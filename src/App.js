import Navcomp from "./comp/Navcomp";
import Footercomp from "./comp/Footercomp";
import Home from "./comp/Home";
import {Switch, Route} from 'react-router-dom'
import Login from "./comp/Login";

function App() {
  return (
  <>
  <Navcomp  />
  <Switch>
    <Route exact path='/' component={Home} /> 
    <Route path='/login' component={Login} /> 
  </ Switch>
  <Footercomp />
  </>
  );
}

export default App;
