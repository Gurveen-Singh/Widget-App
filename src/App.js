import React from "react";
import Accordion from "./components/Accordion";

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

function App() {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default App;
