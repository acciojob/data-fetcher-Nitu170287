import React, { useState, useEffect } from "react";
import "./../styles/App.css";

const App = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch("https://dummyjson.com/products")
      .then((response) => {
        response.json().then((data) => {
          console.log(data);
          setData(data);
        });
        // console.log(data)
        //         setData(data);
      })

      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {/* Do not remove the main div */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default App;
