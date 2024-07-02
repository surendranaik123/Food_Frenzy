import React, { useState, useEffect } from 'react';
import Header from '../Components/layout/Header.js';

export default function UserData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/v1/users');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this useEffect runs once on mount

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Header />
      <h1>Fetched Data:</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '8px' }}>Email</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>First Name</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td style={{ border: '1px solid black', padding: '8px' }}>{item.email}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{item.firstName}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{item.lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
