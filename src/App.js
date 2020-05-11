import React from 'react';
import {Switch ,  Route } from 'react-router-dom' 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Navbar';
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Details from './components/Details'
import Cart from './components/Cart/'
import Modal from './components/Modal'
import DeliveryDetails from './components/DeliveryDetails'
import Default from './components/Default'
import Payment from './components/Payment'



function App() {
  return (
<React.Fragment>
<Navbar/>
<Switch>
  <Route  exact path='/' component={ProductList}></Route>
  <Route path='/details' component={Details}></Route>
  <Route path='/cart' component={Cart}></Route>
  <Route path='/adress' component={DeliveryDetails}></Route>
  <Route  component={Default}></Route>
</Switch>
<Modal/>
<Payment/>
</React.Fragment>
  
  );
}

export default App;
