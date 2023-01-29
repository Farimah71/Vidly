import "./App.css";
import Movies from "./components/Movies";
import Navbar from "./components/navbar";

function App() {
  return (
    <main className="container">
      <Navbar />
      <Movies />
    </main>
  );
}

export default App;
