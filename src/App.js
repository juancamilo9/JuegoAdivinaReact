import Header from './components/Header/Header.js';
import Main from './components/Main/Main.js';

function App() {
  return (
    <div className="App">
        <Header/>
        <Main max={10}/>
    </div>
  );
}

export default App;
