import React from 'react';
import ReactDOM from 'react-dom';
import style from './index.module.css';
// import style from './index.css';

ReactDOM.render(
  <div>
    <div>
      <h1 className={style.h1Background + ' color1'}>React boilerplate</h1>
    </div>
    <div className="h1-global">
      <h1>Просто React boilerplate</h1>
    </div>
  </div>,
  document.getElementById('root')
);
