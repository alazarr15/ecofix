import React from 'react';
import Home from "./sections/Home"
import About from './sections/About';
//import Services from './sections/services';


function App() {
  return (
    <div className="font-sans">
      <Home />
       <About />
      {/* <Services /> */} 
    </div>
  );
}

export default App;
