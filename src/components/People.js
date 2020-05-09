import React, { useEffect, useState } from 'react';

export default function People() {
  const [data, setData] = useState([]);

  async function fetchData() {
    const result = await fetch('https://swapi.dev/api/people/1', {});

    result.json().then(result => setData(result));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {Object.keys(data)
        .slice(0, 1)
        .map(item => (
          <div key={item} className="flex-container">
            <div>
              <span role="img" aria-label="name">
                🖍
              </span>
              Name: {data.name}
            </div>
            <div>
              {' '}
              <span role="img" aria-label="height">
                📏
              </span>
              Height: {data.height}
            </div>
            <div>
              <span role="img" aria-label="height">
                ⏱
              </span>
              Weight: {data.mass}
            </div>
            <div>
              <span role="img" aria-label="height">
                👱🏻
              </span>
              Hair color: {data.hair_color}
            </div>
            <div>
              <span role="img" aria-label="height">
                🟡
              </span>
              Skin color: {data.skin_color}
            </div>
            <div>
              <span role="img" aria-label="height">
                👁
              </span>
              Eye color: {data.eye_color}
            </div>
            <div>
              <span role="img" aria-label="height">
                👶🏻
              </span>
              Birth: {data.birth_year}
            </div>
            <div>♂ Gender: {data.gender}</div>
          </div>
        ))}
    </div>
  );
}
