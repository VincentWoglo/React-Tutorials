import { useState } from 'react';

import { MainContext } from '../../context/useContext';
import Calculator from './components/calculator/index'

function Homepage() {
  const [user, setUser] = useState({
    isProgramming: true,
    name: "You"
  })

    return (
      <MainContext.Provider value={{user, setUser}}>
        <h1>Home Page</h1>
        <Calculator name="Kaitlin" age ={20} />
      </MainContext.Provider>
    );
  }
  
  export default Homepage;
  