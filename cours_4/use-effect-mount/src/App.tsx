import { useState } from "react";

export default function App() {
  const [windowWidth, setWindowWidth] = useState(0);

  return (
    <div>
      <h1>Largeur de la fenêtre</h1>
      <p>window.innerWidth : {windowWidth}px</p>
    </div>
  );
}
