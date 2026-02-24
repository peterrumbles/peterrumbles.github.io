import { Link, Outlet, Scripts } from "@remix-run/react";
import "./app.css";

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="header-inner">
          <Link to="/" className="logo-link">
            <img src="/f3.png" alt="F3" className="logo-img" />
            F3 Puget Sound
          </Link>
          <nav className="nav">
            <Link to="/find-a-workout">Find a workout</Link>
            <Link to="/about">About</Link>
            <Link to="/lexicon">Lexicon</Link>
            <Link to="/locations">Locations</Link>
            <Link to="/programs">Programs</Link>
            <Link to="/media">Media</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </header>
      <Outlet />
      <footer className="footer">
        <div className="footer-inner">
          <div>
            <h3>Links</h3>
            <ul>
              <li><Link to="/find-a-workout">Find a workout</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/lexicon">Lexicon</Link></li>
              <li><a href="https://f3pugetsound.com/" target="_blank" rel="noreferrer">F3 Puget Sound (full site)</a></li>
            </ul>
          </div>
          <div>
            <h3>F3 Credo</h3>
            <p>Leave no man behind, but leave no man where you find him.</p>
          </div>
        </div>
      </footer>
      <Scripts />
    </div>
  );
}
