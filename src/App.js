import logo from './logo.svg';
import './App.css';
import generatedGitInfo from './generatedGitInfo.json';

function App() {
  console.log(generatedGitInfo.gitCommitHash);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.s
        </p>
        <a
          className="App-link"
          href={`https://github.com/ag171980/test-version/commit/${generatedGitInfo.gitCommitHash}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
