import React from 'react';
import { Review } from '../Review';

interface ChildProps {
    Reviews: string;
    // Reviews: Review[];
}

const Content: React.FC<ChildProps> = ({ Reviews }) => {
    return (
        <div className='Content'>
            {Reviews}
            {/* <div className='Wrapper'>
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
            </div> */}
        </div>
    );
}

export default Content;