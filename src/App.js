import logo from './logo.svg';
import './App.css';
import SearchDebounce from './component/SearchDebounce';
import StarRatingSystem from './component/StarRatingSystem';
import Accordion from './component/Accordion';

function App() {
  return (
    <div className="App">
      <SearchDebounce />
      <StarRatingSystem />
      <Accordion />
    </div>
  );
}

export default App;
