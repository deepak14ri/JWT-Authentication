// YourComponent.js
import React, { useEffect, useState } from 'react';

const YourComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/data'); // Replace with your actual server route
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>Your MongoDB Data:</h1>
      <ul>
        {data.map(item => (
          <li key={item._id}>{item.yourFieldName}</li>
        ))}
      </ul>
    </div>
  );
};

export default YourComponent;
