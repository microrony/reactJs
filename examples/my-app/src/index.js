import React from 'react';
import ReactDom from 'react-dom';
import C from './components/components';

const root = document.getElementById('root');

ReactDom.render(
  <C name="Rony" />,
  <C name="Sattar" />,
  <C name="Raju" />,
  root
);
