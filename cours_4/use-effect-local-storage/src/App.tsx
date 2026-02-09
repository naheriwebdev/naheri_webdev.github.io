import { useState } from "react";
import { Toggle } from "./Toggle";

export default function App() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div>
      <h1>Préférence utilisateur</h1>

      <Toggle
        enabled={enabled}
        onToggle={() => setEnabled((prev) => !prev)}
      />

      <p>État actuel : {enabled ? "Activé" : "Désactivé"}</p>
    </div>
  );
}
