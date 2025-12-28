import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>🎬 Netflix Clone</h1>
      <p>Running on Kubernetes (EKS)</p>

      <div className="movies">
        <div className="movie">Stranger Things</div>
        <div className="movie">Money Heist</div>
        <div className="movie">Breaking Bad</div>
        <div className="movie">Dark</div>
      </div>
    </div>
  );
}

export default App;
