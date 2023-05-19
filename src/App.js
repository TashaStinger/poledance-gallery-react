import './App.css';
import Gallery from "./Gallery";
import TrainingProgram from "./TrainingProgram";

function App() {
  return (
    <div className="App">
      <div className='container'>
      <header className="App-header">
        <h1>Pole Dance Gallery</h1>
      </header>
      <main>
        {/* <Gallery /> */}
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
