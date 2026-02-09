type ToggleProps = {
  enabled: boolean;
  onToggle: () => void;
};

export function Toggle({ enabled, onToggle }: ToggleProps) {
  return (
    <button onClick={onToggle}>
      {enabled ? "Désactiver" : "Activer"}
    </button>
  );
}
