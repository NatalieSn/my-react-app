import { Link } from 'react-router-dom';
import '../../assets/styles/Header.css';

type HeaderProps = {
  openModal: () => void;
};

export const Header = ({ openModal }: HeaderProps) => {
  return (
    <header className="header">
      <div className="left">
        <Link to="/">
          <img src="/images/header/logo.svg" alt="Splice Logo" className="header__logo" />
        </Link>
        <nav className="header__nav">
          <ul className="header-list">
            <li className="header-list__item">
              <Link to="/studio">STUDIO</Link>
            </li>
            <li className="header-list__item">
              <Link to="/community">COMMUNITY</Link>
            </li>
            <li className="header-list__item">
              <Link to="/sounds">SOUNDS</Link>
            </li>
            <li className="header-list__item">
              <Link to="/plugins">PLUGINS</Link>
            </li>
            <li className="header-list__item">
              <Link to="/cards">REVIEWS</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header__buttons">
        <Link to="/login" className="header__button-log">
          LOG IN
        </Link>
        <button className="header__button-sign" id="openModal" onClick={openModal}>
          SIGN UP
        </button>
      </div>
    </header>
  );
};
