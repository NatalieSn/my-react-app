import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import '../../../src/assets/styles/Header.css';

type HeaderProps = {
  openModal: (modalId: string) => void;
};

export const Header = ({ openModal }: HeaderProps) => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash && location.pathname === '/') {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="header">
      <div className="left">
        <Link to="/"><img src="./public/images/header/logo.png" alt="Логотип" className="header__logo" /></Link>

        <nav className="header__nav">
          <ul className="header-list">
            <li className="header-list__item"><Link to="/#partners" className="header-list__item-link" 
            onClick={(e) => handleAnchorClick(e, 'partners')}>ПАРТНЕРЫ</Link></li>
            <li className="header-list__item"><Link to="/#tours" className="header-list__item-link" 
            onClick={(e) => handleAnchorClick(e, 'tours')}>ТУРЫ</Link></li>
            <li className="header-list__item"><Link to="/#gear" className="header-list__item-link" 
            onClick={(e) => handleAnchorClick(e, 'gear')}>СНАРЯЖЕНИЕ</Link></li>
           <li className="header-list__item"><Link to="/#experiencies" className="header-list__item-link" 
            onClick={(e) => handleAnchorClick(e, 'experiencies')}>ОПЫТ</Link></li>
            <li className="header-list__item"><Link to="/cards" className="header-list__item-link">ОТЗЫВЫ</Link></li>
            <li className="header-list__item"><Link to="*" className="header-list__item-link">ФОНД</Link></li>
          </ul>
        </nav>
      </div>
      <div className="header__buttons">
        <button className="header__button-log openModal" id="openModal" onClick={() => openModal('reg-modal')}>ВОЙТИ</button>
        <button className="header__button-sign openModal" id="openModal" onClick={() => openModal('reg-modal')}>ЗАРЕГИСТРИРОВАТЬСЯ</button>
      </div>

    </header>
  );
};
