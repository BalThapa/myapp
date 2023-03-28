import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Logo</h1>
      </header>
      <div class="container">
        <div>
          <div class="box1">
            <h3>Maria</h3>
            <p>Title:CEO</p>
            <p>Age:29</p>
          </div>
        </div>
        <div>
          <div class="box2">
            <h3>Kati</h3>
            <p>Title:Developer</p>
            <p>Age:25</p>
          </div>
        </div>
        <div>
          <div class="box3">
            <h3>Karin</h3>
            <p>Title:Designer</p>
            <p>Age:45</p>
          </div>
        </div>
      </div>
      <div>
        <footer>
          <small>copyright@2023</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
