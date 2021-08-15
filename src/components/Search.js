import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");
  const [deBounceTerm, setDebounceTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const termId = setTimeout(() => {
      setDebounceTerm(term);
    }, 1000);

    return () => {
      clearTimeout(termId);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: deBounceTerm,
        },
      });
      setResults(data.query.search);
    };
    search();
  }, [deBounceTerm]);

  const renderedList = results.map((result, i) => {
    return (
      <div key={i} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="filed">
          <label>Enter Search Term</label>
          <input
            className="input"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="ui celled list">{renderedList}</div>
    </div>
  );
};

export default Search;
