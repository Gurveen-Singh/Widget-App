import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };

    document.body.addEventListener("click", onBodyClick);

    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  const renderedOptions = options.map((Option, index) => {
    if (Option.label === selected.label) {
      return null;
    }

    return (
      <div
        key={index}
        className="item"
        onClick={() => onSelectedChange(Option)}
      >
        {Option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
      <div className="text" style={{ color: `${selected.Color}` }}>
        {selected.Color}
      </div>
    </div>
  );
};

export default Dropdown;
