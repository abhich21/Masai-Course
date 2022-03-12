
import './App.css';
import { Button, Primary, Dash, Text, Link } from './components/Button';

import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <div className="App">
      <Primary theme={theme}>Primary Button</Primary>
      <Button theme={theme}>Default Button</Button>
       <Dash theme={theme}>Dashed Button</Dash>
      <Text theme={theme}>Text Button</Text>
      <Link theme={theme}>Link Button</Link>
      <br />
      <button onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
      >change theme</button>
    </div>
  );
}

export default App;
