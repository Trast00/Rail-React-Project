import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Messages from './Messages';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/messages" element={<Messages />} />
    </Routes>
  </div>
);

export default App;
