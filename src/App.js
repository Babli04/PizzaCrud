import { BrowserRouter as Router, NavLink, Routes, Route } from "react-router-dom";
import './App.css';
import { PizzaListPage } from './PizzaListPage';
import { PizzaSinglePage } from './PizzaSinglePage';
import { PizzaCreatePage } from './PizzaCreatePage';
import { PizzaModPage } from './PizzaModPage';
import { PizzaDeletePage } from './PizzaDeletePage';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-sm navbar-dark bg-danger">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
           <NavLink to={`/`} className="nav-link">
              <span className="nav-link">Pizza rendelés</span>
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink to={`/uj-pizza`} className="nav-link">
              <span className="nav-link">Új pizza hozzáadása</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
          <Route path="/" element={<PizzaListPage/>} />
          <Route path="/Pizza/:pizzaId" element={<PizzaSinglePage/>} />
          <Route path="uj-pizza" element={<PizzaCreatePage/>} />
          <Route path="mod-pizza/:pizzaId" element={<PizzaModPage/>} />
          <Route path="del-pizza/:pizzaId" element={<PizzaDeletePage/>} />
      </Routes>
    </Router>
  );
}

export default App;
