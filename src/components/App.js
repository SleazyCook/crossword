import {Outlet} from 'react-router-dom';
import Navbar from './Navbar';
import './general.css';

const App = () => {
  return (
    <div>
      
      <header>
        <h1><span id="cook-title">The Cook Family</span><br />
          <span id="cross-title">Crossword</span></h1>
      </header>

      <Navbar />

      <Outlet context />

      <footer>
        <p>
          Developed by
          <span id="author"> Drewford</span>
        </p>
      </footer>

    </div>
  )
}

export default App;