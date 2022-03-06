import Tobar from "./components/Topbar/Tobar";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserList } from "./components/pages/UserList/UserList";


function App() {
  return (
    <Router>
      <Tobar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/users">
            <UserList/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
