import { type FC } from 'react'
import './App.css'

const App: FC = () => {

  return (
    <div>
      <header>
          <img src="src/assets/react.svg" className="logo react" alt="React logo" />
          <h1>Bienvenue sur mon app React</h1>
          <h2>Cette page utilise React</h2>
        </header>
      <main>
        <section>
          <h2>À propos</h2>
          <p>Dans cet exercice nous allons jouer avec le principe de composant.</p>
          <p>Les composants sont très utiles dans le développement web moderne.</p>
        </section>

        <section>
          <h2>A la fin de ce cours</h2>
          <p>Le JSX et les composants n'auront plus aucun secrets pour vous !</p>
        </section>  
      </main>
    </div>  
  )
}

export default App
