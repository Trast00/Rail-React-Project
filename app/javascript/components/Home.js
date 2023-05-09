import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <>
    <h1>Hello World</h1>
    <h3>To See list of message click below</h3>
    <Link to="/messages">Message LInk</Link>
  </>
);

export default Home;
