import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard'
import React from 'react';
import Payment from './components/Payment/Payment';
import EnterAmount from './components/Payment/EnterAmount';
import Auth from './components/Balance/Auth.js';
import Balance from './components/Balance/Balance.js';




import Investments from './components/Investment/Investments.js';


import PaymentDone from './components/Payment/PaymentDone.js';
import IncorrectPass from './components/Payment/IncorrectPass.js';

import Profile from './components/Profile/Profile.js';
function App() {
  return <React.Fragment>
      
    
    <main>
    <Routes>
      <Route path='/' element={<Dashboard/>}></Route>
      <Route path='/payment' element={<Payment/>}></Route>
      <Route path='/enteramount' element={<EnterAmount/>}></Route>
      <Route path='/auth' element={<Auth/>}></Route>
      <Route path='/balance' element={<Balance/>}></Route>
      

      <Route path='/investments' element={<Investments/>}></Route>

      <Route path='/done' element={<PaymentDone/>}></Route>
      <Route path='/again' element={<IncorrectPass/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>



     
      
    </Routes>
  </main>
</React.Fragment>
}

export default App;