import React, { useState, useEffect } from 'react';
import  Nav  from "./layout/Nav.tsx";// App.tsx
import Content from "./layout/Content.tsx";

import { IUser } from "./type/index";
import { HomeAPI } from "./services/homeServices"

function App() {
  const [user, setUser] = useState<IUser[]>([]);

  const getUser = async () => {
    try {
      const rq = await HomeAPI.getUser();
      console.log(rq);
      // setUser(response.data); 
      } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
       <Nav/>
       <Content/>
    </>
  );
}

export default App;
