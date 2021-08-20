import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./convert";

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "Arabic",
    value: "ab",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, settext] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <input value={text} onChange={(e) => settext(e.target.value)} />
        </div>
      </div>
      <br />
      <Dropdown
        label="Select a language"
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;
