import logo from './logo.svg';
import './App.css';

function App() {

  let posts = 'test contents';
  let styles = {color: 'gold', fontSize: '30px'}

  return (
    <div className="App">
      <div className='black-nav'>
        <div style={styles }>Blog Title </div>
      </div>
      <h4>{posts}</h4>
    </div>
  );
}

export default App;
