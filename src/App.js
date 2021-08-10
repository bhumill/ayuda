import './App.css';
import Footer from './components/Footer.js'
import Header from './components/Header.js'
import  Login from './Screens/Login'
import SignUp from "./Screens/SignUp";
import AllNurses from "./Screens/AllNurses";
import {Route,BrowserRouter,Switch} from 'react-router-dom'
import Home from "./Screens/Home";
import Profile from "./Screens/Profile";
import Logout from "./Screens/Logout";
function App() {
  return (
      <BrowserRouter>
          <Switch>
              <Route path={"/login"} exact component={Login}/>
              <Route path={"/signup"} exact component={SignUp}/>
              <Route path={"/user/AllNurse"} exact component={AllNurses}/>
              <Route path={"/home"} component={Home}/>
              <Route path={"/profile"} component={Profile}/>
              <Route path={"/logout"} component={Logout}/>
          </Switch>
      </BrowserRouter>
  );
}

export default App;