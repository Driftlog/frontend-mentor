import React from 'react';
import ReactDOM from 'react-dom/client';
import Form from './Form';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='flex justify-center items-center h-screen'>
      <Form />
    </div>
  </React.StrictMode>
);


