import Navcomp from "./comp/Navcomp";
import Footercomp from "./comp/Footercomp";
import Home from "./comp/Home";
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
  <>
  <Navcomp  />
  <Switch>
    <Route path='/' component={Home} /> 
  </ Switch>
  <Footercomp />
  </>
  );
}

export default App;
