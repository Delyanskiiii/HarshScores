import React from 'react';
import '../App.css';
import { Review } from '../types/Review';

function Row({Review}: {Review: Review}) {
  return (
    <div className="Row"> 
      {Review.name}
    </div>
  );
}

export default Row;