import './App.css';
import Program from "./Program.js";

function App() {
  return (
    <div className="App">
      <div className='container'>
      <header className="App-header">
        <h1>Training Program</h1>
      </header>
      <main>
        <Program />
      </main>
      <footer className="App-footer">
        Here will be a footer
      </footer>
      </div>
    </div>
  );
}

export default App;
