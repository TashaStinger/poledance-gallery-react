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
        <i className="instaIcon fa-brands fa-instagram"></i> <a className="instaLink" href="https://www.instagram.com/pole.dance.krakow/" rel="noreferrer" target="_blank">pole.dance.krakow</a>
        {/* <a className="instaLink" href="https://www.instagram.com/ts_poledancer/">@ts_poledancer</a> */}
      </footer>
      </div>
    </div>
  );
}

export default App;
