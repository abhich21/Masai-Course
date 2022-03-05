import {Counter} from "./components/Counter"
import './App.css';

function App() {

  const counter = 10;
  return (
    <div className="App">
      <Counter
        value={counter}
      />
    </div>
  );
}

export default App;
