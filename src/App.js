// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';

function App() {
  const currentYear = new Date().getFullYear(); 
  const isLoggedIn = true;
  return(
    <div>
      <h1> ENSF-381: Full Stack Web Development</h1>
      <p>React Components</p>
      <p> Current Year: {currentYear}</p>
      <p> {isLoggedIn ? "welcome back!" : "Please log in."} </p>
      
    </div>
  ) 
}

export default App;