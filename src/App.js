import './App.css';
import GestionAvatar from './components/GestionAvatar';
import GestionCle from './components/GestionCle';
import GestionPokemon from './components/GestionPokemon';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GestionAvatar />
        <GestionPokemon />
        <GestionCle />
      </header>
    </div>
  );
}

export default App;
