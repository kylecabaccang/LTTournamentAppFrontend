import React, { useEffect, useState } from 'react';

function Matches() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://tournament.luckycue.tech/api/get-matches/1')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data); // Log the data to the console
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div> // You can replace this with your loading indicator or UI
  }

  return null;
}

export default Matches;
