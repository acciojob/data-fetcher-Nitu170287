import React, { useState, useEffect } from "react";
import "./../styles/App.css";

const App = () => {
  const [data, setData] = useState([]);
  const[err, setErr] = useState("")

  const fetchData = () => {
    fetch("https://dummyjson.com/products")
      .then((response) => {
        if(!response.ok){
          throw new Error("Network response was not ok")
        }
        response.json().then((data) => {
         
          setData(data);
        });
        // console.log(data)
        //         setData(data);
      })

      .catch((err) => {
        
        setErr(err.message);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {/* Do not remove the main div */}
      <h1>Data Fetched from API</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <p>{err?"An error occurred: "+err : null}</p>
    </div>
  );
};

export default App;
