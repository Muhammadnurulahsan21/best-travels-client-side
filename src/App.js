import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Components/About/About";
import BookNowDR from "./Components/BookNowDR/BookNowDR";
import ContactUs from "./Components/ContactUs/ContactUs";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import PackageDetails from './Components/PackageDetails/PackageDetails';
import Cart from './Components/Cart/Cart';
import CheckOut from './Components/CheckOut/CheckOut';
import OrderReceived from './Components/OrderReceived/OrderReceived';
import Login from "./Components/Login/Login";
import Packages from "./Components/Packages/Packages";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Register from "./Components/Register/Register";
import AuthProvider from "./ContextApi/AuthProvider";
import NotFound from "./Components/NotFound/NotFound";
import MyBookings from "./Components/MyBookings/MyBookings";
import ManageAllBookings from "./Components/ManageAllBookings/ManageAllBookings";
import "bootstrap/dist/css/bootstrap.min.css";
import AddYourPackage from './Components/AddYourPackage/AddYourPackage';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/packages">
              <Packages></Packages>
            </PrivateRoute>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/contactus">
              <ContactUs></ContactUs>
            </Route>
            <PrivateRoute exact path="/booknow">
              <BookNowDR></BookNowDR>
            </PrivateRoute>
            <PrivateRoute exact path="/package-details/:packageKey">
              <PackageDetails></PackageDetails>
            </PrivateRoute>
            <PrivateRoute exact path="/cart">
              <Cart></Cart>
            </PrivateRoute>
            <PrivateRoute exact path="/check-out">
              <CheckOut></CheckOut>
            </PrivateRoute>
            <PrivateRoute exact path="/order-received/:orderID">
              <OrderReceived></OrderReceived>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route exact path="/mybookings">
              <MyBookings></MyBookings>
            </Route>
            <Route exact path="/manageallbookings">
              <ManageAllBookings></ManageAllBookings>
            </Route>
            <Route exact path="/addyourpackage">
              <AddYourPackage></AddYourPackage>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
