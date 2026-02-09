import './App.css'

function App() {
  return (
    <div id="app">
      <p>Please select an image</p>
      <p>
        <input data-testid="file-picker" type="file" accept="image/*" />
        <button>Pick Image</button>
      </p>
    </div>
  );
}

export default App;