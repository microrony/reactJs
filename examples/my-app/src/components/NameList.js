import React from 'react';
import Name from './Name';

function NameList() {
  const names = ['Mahabubur', 'Sattar', 'Raju'];
  const nameList =  names.map(name => <Name name={name} />)
  return <div>{nameList}</div>
}

export default NameList;