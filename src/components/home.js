import React from 'react';
import { Link } from 'react-router-dom';

function Home() {

  return (
    <div>
      <h3>This is the home page</h3>
    	<Link to='/login'>Login</Link>
    	<br/>
    	<Link to='/about'>About</Link>
    	
    </div>
  );
}

export default Home;