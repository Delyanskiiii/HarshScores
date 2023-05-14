import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import { supabase } from './components/Supabase';
import { Review } from './types/Review';
import './App.css';


function App() {

  const [first, setFirst] = useState<boolean>(true)    
  const [data, setData] = useState<undefined | Review[]>(undefined)

  useEffect(() => {
    if (first)
    {
    supabase
    .from('Data')
    .select('*')
    .order('total_score', { ascending: false })
    .then((response: any) => {
      setData(response.data)
    })
    setFirst(false)
    }
  });

  return (
    <div className="App">
      <Header />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
            <th>Category</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          {data !== undefined ? 
            data.map((review: Review) => (
              <tr key={review.id}>
                <td>{review.name}</td>
                <td>{review.total_score}</td>
                <td>{review.category}</td>
                <td>{review.comment}</td>
              </tr>
          )) : <></>}
        </tbody>
      </table>
    </div>
  );
}

export default App;

