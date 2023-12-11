import React from "react";
import "./App.css";
import {useState} from "react";
import Person from "./Person";
import { Country } from "./Person";



function App() {
  const [name, setName] = useState<string>();
  setName("hossein")
  return (
    <div className="App">
      <Person
        name={"Hossein"}
        email={"Hossein@resup.ir"}
        age={20}
        isMarried={false}
        courses={["react", "js", "Math"]}
        country={Country.Iran}
      />
    </div>
  );
}

export default App;
