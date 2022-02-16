import { useState, useEffect } from 'react';
import {auth,firebase} from './firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import Title from './components/Title'
import Board from './components/Board'
import Login from './components/Login';
import Home from './components/Home';

import './App.css';

function App() {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div className="App">
      <Title/>
      {user ? <Home/> : <Login/>}
      <Board/>
    </div>
  );
}

export default App;
