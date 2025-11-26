import React, { useEffect, useState } from 'react';

function Genreread() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5454/api/v1/genre')
      .then(res => res.json())
      .then(d => setData(d))
      .catch(err => console.error("Error fetching genres:", err));
  }, []);

  return (
    <div className='bg-white min-h-screen text-black'>
      <div>
        {data.map((i) => (
          <div key={i.id} className="bg-gray-200 text-black p-3 my-2">
            <p>{i.id}</p>
            <p>{i.name}</p>
            <p>{i.url}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Genreread;

