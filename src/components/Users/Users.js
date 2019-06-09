import React, { useContext } from 'react';
import { MainContext } from '../Wrapper';

const Users = () => {
  const mainContext = useContext(MainContext);
  console.log(mainContext.location)
  return (
    <div>Hello Users</div>
  );
};

export default Users;
