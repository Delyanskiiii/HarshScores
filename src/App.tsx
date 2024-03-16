import Header from './Components/Header';
import Footer from './Components/Footer';
import { Review } from './Review';
import Reviews from './Reviews.json';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="Screen">
        <Header Headline='Harsh'/>
        <table>
          <thead>
            <th>Name</th>
            <th>Score</th>
            <th>Category</th>
          </thead>
          <tbody>
            {Reviews.map((review: any) => (
              <tr key={review.name}>
                <td>{review.name}</td>
                <td>{review.score}</td>
                <td>{review.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Footer Headline='Harsh'/>
      </div>
    </div>
  );
}

export default App;