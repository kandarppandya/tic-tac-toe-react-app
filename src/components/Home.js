import React from 'react';

import { auth } from '../firebase'

import '../App.css';

const Home = () => {
  
  return (
    <div className="home">
      <img src={auth.currentUser.photoURL} alt="" class="avatar"/><br/><span><h4>{auth.currentUser.displayName}</h4></span>
      <button className="button signout" onClick={() => auth.signOut()}>Sign out</button>
    </div>
  )
}

export default Home;