import { useState, useEffect } from 'react';
import { IUser } from "./type/index";
import { HomeAPI } from "./services/homeServices.ts";
import Nav from './layout/Nav.tsx';
import Content from './layout/Content.tsx';
import Tapos from './homePage/Pages/Tapos.tsx';
import Wallet from './homePage/Pages/Wallet.tsx';
import { Routes, Route } from 'react-router-dom';
import {RouterLink} from "./util/RouterLink"



function App() {
  const [user, setUser] = useState<IUser[]>([]);

  const getUser = async () => {
    try {
      const rq = await HomeAPI.getUser();
      setUser(rq.data); 
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
    
      <Nav />
      <Routes >
        <Route path={RouterLink.Logo} element={<Content />} />
        <Route path={RouterLink.Tapos} element={<Tapos />} />
        <Route path={RouterLink.Wallet} element={<Wallet />} />
        {/* <Route path="" element={}/> */}
      </Routes>
    </>
  );
}

export default App;
