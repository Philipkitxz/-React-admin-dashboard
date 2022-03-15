import Tobar from "./components/Topbar/Tobar";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserList } from "./components/pages/UserList/UserList";
import User from "./components/pages/User/User";
import NewUser from "./components/pages/newUser/NewUser";
import ProductList from "./components/pages/productList/ProductList";
import Product from "./components/pages/product/Product";
import NewProduct from "./components/pages/newproduct/NewProduct";
import { Dooh } from "./components/pages/doohzone/Dooh";
import { Insights } from "./components/pages/Insights/Insights";


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
          <Route path="/user/:userId">
            <User/>
          </Route>
          <Route path="/newUser">
            <NewUser/>
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
          <Route path="/doohzone">
            <Dooh/>
          </Route>
          <Route path="/insights">
            <Insights/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
