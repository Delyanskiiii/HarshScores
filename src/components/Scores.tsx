import React from 'react';
import { Review } from '../Review';
import Reviews from '../Reviews.json'

const Scores: React.FC = () => {
    return (
        <div className='Content'>
            <div className='TableWrapper'>
                <table>
                    <thead>
                        <th>Name</th>
                        <th>Score</th>
                        <th>Category</th>
                    </thead>
                    <tbody>
                        {Reviews.map((review: Review) => (
                            <tr key={review.name}>
                                <td>{review.name}</td>
                                <td>{review.score}</td>
                                <td>{review.category}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Scores;