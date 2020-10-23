import React from 'react';
import { UserContext, UserNameContext } from '../App';

function ComponentC() {
  return (
    <UserContext.Consumer>
      {user => {
        return (
          <UserNameContext.Consumer>
            {userName => (
              <h2>
                Name is {user} and username is {userName}
              </h2>
            )}
          </UserNameContext.Consumer>
        );
      }}
    </UserContext.Consumer>
  );
}

export default ComponentC;
