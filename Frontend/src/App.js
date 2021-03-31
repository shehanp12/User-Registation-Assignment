import './App.css';
import Register from "./screens/Register/Register";
import Header from "./components/Header/Header";
import Login from "./screens/Login/Login";
import {BrowserRouter as Router, Route,  Switch} from 'react-router-dom';

const App = () => (
   <Router>
       <Header/>
       <Switch>
           <Route exact path="/login" component={Login} />
           <Route path="/login" component={Login}/>
           <Route path="/register" component={Register}/>
           <Route path='*' component={Login} />
       </Switch>
   </Router>

);

export default App;
