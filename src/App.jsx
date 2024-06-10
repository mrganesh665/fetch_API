import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users")
      .then((response) => setData(response.data));
  }, []);

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.25rem', 
    justifyContent: 'center',
    alignItems: 'center'
  };

  const itemStyle = {
    marginRight: '2.75rem' 
  };

  return (
    <div style={containerStyle}>
      {data.length > 0 &&
        data.map((val, i) => {
          return (
            <div key={i} style={itemStyle}>
              <img src={val.avatar_url} width="200px" />
              <h2>{val.login}</h2>
            </div>
          );
        })}
    </div>
  );
};

export default App;
