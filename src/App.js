import logo from './logo.svg';
import './App.css';
import SearchDebounce from './component/SearchDebounce';
import StarRatingSystem from './component/StarRatingSystem';

function App() {
  return (
    <div className="App">
      <SearchDebounce/>
      <StarRatingSystem/>
    </div>
  );
}

export default App;
