import "./App.css";
import Cube from './Cube'

// const colors = ["white", "red", "blue", "green", "yellow", "orange"];

// const rand = () => Math.floor(Math.random() * 6);

function App() {
  const cubes = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="App">
      <div className="container">
        {cubes.map((x) => (
          <Cube key={x} />
        ))}
      </div>
    </div>
  );
}

export default App;
