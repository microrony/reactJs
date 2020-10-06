import React from 'react';
import Person from './Person'

function NameList() {
  const persons = [
    {
      id: 1,
      name: 'Mahabubur',
      age: 20,
      skill: 'Programming'
    },
    {
      id: 2,
      name: 'Sattar',
      age: 25,
      skill: 'Dopper'
    },
    {
      id: 3,
      name: 'Raju',
      age: 20,
      skill: 'Fishing'
    }
  ];
  const personList = persons.map(person => <Person person={person} />);
  return <div>{personList}</div>
}

export default NameList;