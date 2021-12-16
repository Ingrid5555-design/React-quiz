import React from 'react';
import Start from './components/Start';
import Quiz from './components/Quiz';
import Restart from './components/Restart';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <h1 className='title'> QUIZ APP </h1>
        <Routes>
          <Route exact path='/' element={<Start />} />
          <Route exact path='/quiz' element={<Quiz />} />
          <Route exact path='/restart' element={<Restart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
