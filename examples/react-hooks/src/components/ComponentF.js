import React, { useContext } from 'react';
import { UserContext, UserNameContext } from '../App';

function ComponentC() {
  const user = useContext(UserContext);
  const userName = useContext(UserNameContext);
  return (
    <h2>
      Name is {user} and username is {userName}
    </h2>
  );
}

export default ComponentC;
