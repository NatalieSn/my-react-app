import '../../assets/styles/Header.css';

type HeaderProps = {
  openModal: () => void;
};

export const Header = ({ openModal }: HeaderProps) => {
  return (
    <header className="header">
      <div className="left">
        <img src="./public/images/header/logo.svg" alt="" className="header__logo" />
        <nav className="header__nav">
          <ul className="header-list">
            <li className="header-list__item">STUDIO</li>
            <li className="header-list__item">COMMUNITY</li>
            <li className="header-list__item">SOUNDS</li>
            <li className="header-list__item">PLUGINS</li>
            <li className="header-list__item">BLOG</li>
          </ul>
        </nav>
      </div>
      <div className="header__buttons">
        <a href="#" className="header__button-log">LOG IN</a>
        <button className="header__button-sign" id="openModal" onClick={openModal}>SIGN UP</button>
      </div>
    </header>
  );
};