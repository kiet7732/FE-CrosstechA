import { useState, useEffect } from 'react';
import { IUser } from "./type/index";
import { HomeAPI } from "./services/homeServices";
import Nav from './layout/Nav.tsx';
import Content from './layout/Content.tsx';

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
      <Content />
    </>
  );
}

export default App;
