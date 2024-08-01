import './App.css';
import LeftSide from './LeftSide.jsx';
import RightSide from './RightSide.jsx';

function App() {
  return (
    <div className="App">
      <title>Kev The Dev</title>
      <div className='left-section'>
        <LeftSide />
      </div>
      <div className='right-section'>
        <RightSide />
      </div>
    </div>
  );
}

export default App;
