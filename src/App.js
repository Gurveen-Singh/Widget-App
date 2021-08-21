import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
  {
    title: "What is React?",
    content: "React is a frontend JS library.",
  },
  {
    title: "Why React?",
    content: "Engineers love React.",
  },
  {
    title: "Why React?",
    content: "Engineers love React.",
  },
];

const options = [
  {
    label: "Red",
    Color: "red",
  },
  {
    label: "Green",
    Color: "green",
  },
  {
    label: "Blue",
    Color: "blue",
  },
];

function App() {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          options={options}
          onSelectedChange={setSelected}
          selected={selected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
}

export default App;
