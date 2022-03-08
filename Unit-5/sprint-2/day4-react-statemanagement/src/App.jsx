//import { useState } from 'react';
import './App.css';
import {Grocery} from "./components/Grocery"


function App() {

    //const [counter, setCounter]= useState(0)
  
  // const getData = (data) => {
  //   console.log('received from child:', data);
  //   setCounter(data);
  // }
  return (
      <div className="App">
          {/* <Left
          fn={getData}
          />
      <Right data={ counter}/> */}

      <Grocery />
    
     
    </div>
  );
}


// function Left({ fn}) {
//   const counter = 10;
//   fn(counter)
//     return <div>Left:</div>
// }

// function Right({data}) {
//   return <div>Right:{data}</div>
// }


 export default App;