import componentLogo from './assets/package_google.png';
import propsLogo from './assets/gear_google.png';
import jsxLogo from './assets/jsx.png';
import stateLogo from './assets/database.png';

export const CORE_CONCEPTS = [
  {
    image: componentLogo,
    title: 'Components',
    description:
      'Le concept de base de toutes les applications web modernes, on créé les interfaces en combinant les composants.',
  },
  {
    image: jsxLogo,
    title: 'JSX',
    description:
      "Un mélange de HTML et de Javascript permettant une meilleur flexibilité dans l'affichage.",
  },
  {
    image: propsLogo,
    title: 'Props',
    description:
      "Permet aux composant d'être configurable et réutilisable en leurs injectant des données.",
  },
  {
    image: stateLogo,
    title: 'State',
    description:
      "Données du composants qui une fois changés déclenche un nouveau rendu du composant et une maj de l'ui.",
  },
];
