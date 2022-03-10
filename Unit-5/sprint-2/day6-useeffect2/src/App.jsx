
import { useState } from 'react';
import './App.css';
import { Timer } from './components/Timer';

function App() {
  const [show,setShow]= useState(true)
  return (
    <div className="App">
      {show ? <Timer /> : ""}
      <button onClick={() => {
        setShow(show ? false : true);
        //setShow(!show)
      }}>{show? "hide timer":"show timer" }</button>
    </div>
  );
}

export default App;
