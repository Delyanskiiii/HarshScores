import React, { useEffect, useState } from 'react';
import Row from './components/Row';
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
    .then((response: any) => {
      setData(response.data)
    })
    setFirst(false)
    }
  });

  return (
    <div className="App">
      <Header />
      <div className="List">
        {
          data !== undefined ? 
            data.map((review: Review) => (<Row Review={review} key={review.id} />)) : 
            <></>
        }
      </div>
    </div>
  );
}

export default App;

