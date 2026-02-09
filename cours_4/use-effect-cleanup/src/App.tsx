import { useState } from "react";

export default function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  return (
    <div>
      <h1>Resize listener</h1>
      <p>Largeur de la fenêtre : {windowWidth}px</p>
    </div>
  );
}
