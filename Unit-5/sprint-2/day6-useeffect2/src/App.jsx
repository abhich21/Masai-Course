
import { useEffect, useState } from 'react';
import './App.css';
import { Timer } from './components/Timer';

function App() {
  const [show, setShow] = useState(true);

  // useEffect(() => {
  //   console.log("first");
  //   return () => {
  //     console.log("first1")
  //   }
  // });
  // useEffect(() => {
  //   console.log("second");
  //   return () => {
  //     console.log("second2")
  //   }
  // },[]);
  // useEffect(() => {
  //   console.log("third");
  //   return () => {
  //     console.log("third3")
  //   }
  // },[show]);
  return (
    <div className="App">
      {show ? <Timer /> : <div>Click Again To Reset to Initial Value!</div>}
      <button onClick={() => {
        setShow(show ? false : true);
        //setShow(!show)
      }}>{show? "stop":"start" }</button>
    </div>
  );
}

export default App;
