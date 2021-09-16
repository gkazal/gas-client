import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Order from './Components/Order/Order/Order';
import Location from './Components/Order/Location/Location';
import ChooseLocation from './Components/Order/ChooseLocation/ChooseLocation';
import Map from './Components/Order/Order/Map';
import Data from './Components/Order/FakeData/Data';


function App() {
  return (
    <Router>
      <Switch>

        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/order">
          <Order></Order>
        </Route>
        <Route path="/location">
          <Location></Location>
        </Route>

        <Route path="/map">
          <Map></Map>
        </Route>

        <Route path="/chooseLocation/:title">
          <ChooseLocation></ChooseLocation>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
