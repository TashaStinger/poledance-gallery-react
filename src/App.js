import './App.css';
import TrainingProgram from "./TrainingProgram";

function App() {
  return (
    <div className="App">
      <div className='container'>
      <header className="App-header">
        <h1>Pole Dance Program</h1>
      </header>
      <main>
        <TrainingProgram />
      </main>
      <footer className="App-footer">
        Here will be a footer
      </footer>
      </div>
    </div>
  );
}

export default App;
