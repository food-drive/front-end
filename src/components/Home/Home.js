import React, { useContext } from 'react';
import { MainContext } from '../Wrapper';

const Home = () => {
  const mainContext = useContext(MainContext);
  console.log(mainContext.location)
  return (
    <div>Hello Home</div>
  );
};

export default Home;
