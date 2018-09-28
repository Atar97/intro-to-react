import React from 'react';
import ReactDom from 'react-dom';
import Clock from './clock';
import Tabs from './tabs';

document.addEventListener('DOMContentLoaded', () => {
  console.log("page loaded");

  const root = document.getElementById('root');
  let array = [
      {title: 'Luke', content: 'Luke is Cool'},
      {title: 'Austin', content: 'Austin is Cool'},
      {title: 'Cats', content: 'Cats is Cool'}
    ];
  ReactDom.render(
      <div>
        <h1>React Widgets</h1>
        <Clock />
        <Tabs tabs={array}/>
      </div>,
      root
  );
});
