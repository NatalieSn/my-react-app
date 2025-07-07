import '../../assets/styles/Footer.css';
import '../../assets/styles/Modal.css';

export const Footer = () => {
  return (
    <footer className="footer">
        <div className="copyright">
            <img src="./public/images/header/logo.png" alt="BlueEcho logo" className="copyright__logo"/>
            <p className="copyright__text">2025 BlueEcho.com Все права защищены</p>
        </div>
        <div className="links-container">
            <div className="links">
                <ul className="links__column">
                    <h2 className="column__h">ТУРЫ</h2>
                    <li className="column__link">Плавание с китами</li>
                    <li className="column__link">Погружение к рифам</li>
                    <li className="column__link">Групповые туры</li>
                </ul>
            </div>
            <div className="links">
                <ul className="links__column">
                    <h2 className="column__h">СОХРАНЕНИЕ ПРИРОДЫ</h2>
                    <li className="column__link">Наша миссия</li>
                    <li className="column__link">Партнерские организации</li>
                    <li className="column__link">Экологические практики</li>
                </ul>
            </div>
            <div className="links">
                <ul className="links__column">
                    <h2 className="column__h">ИСТОРИИ</h2>
                    <li className="column__link">Рассказы дайверов</li>
                    <li className="column__link">Факты о морской жизни</li>
                    <li className="column__link">Советы путешественникам</li>
                </ul>
            </div>
            <div className="links">
                <ul className="links__column">
                    <h2 className="column__h">ТУРЫ</h2>
                    <li className="column__link">Плавание с китами</li>
                    <li className="column__link">Погружение к рифам</li>
                    <li className="column__link">Групповые туры</li>
                </ul>
            </div>
            <div className="links">
                <ul className="links__column">
                    <h2 className="column__h">СОХРАНЕНИЕ ПРИРОДЫ</h2>
                    <li className="column__link">Наша миссия</li>
                    <li className="column__link">Партнерские организации</li>
                    <li className="column__link">Экологические практики</li>
                </ul>
            </div>
            <div className="links">
                <ul className="links__column">
                    <h2 className="column__h">ИСТОРИИ</h2>
                    <li className="column__link">Рассказы дайверов</li>
                    <li className="column__link">Факты о морской жизни</li>
                    <li className="column__link">Советы путешественникам</li>
                </ul>
            </div>
        </div>
        <div className="socials">
            <h2 className="column__h">ПРИСОЕДИНЯЙТЕСЬ К НАМ В СОЦСЕТЯХ</h2>
            <div className="socials_imgs">
                <a href="#" aria-label="Facebook"><img src="./public/images/facebook.svg" alt="Facebook icon"
                        className="socials__item"/></a>
                <a href="#" aria-label="Twitter"><img src="./public/images/twitter.svg" alt="Twitter icon"
                        className="socials__item"/></a>
                <a href="#" aria-label="Instagram"><img src="./public/images/instagram.svg" alt="Instagram icon"
                        className="socials__item"/></a>
                <a href="#" aria-label="YouTube"><img src="./public/images/YouTube.svg" alt="YouTube icon"
                        className="socials__item"/></a>
            </div>
            <ul className="socials__links">
                <li className="socials__link">Условия использования</li>
                <li className="socials__link">Политика конфиденциальности</li>
                <li className="socials__link">Вакансии</li>
            </ul>
            <ul className="socials__links">
                <li className="socials__link">Контакты</li>
                <li className="socials__link">Помощь</li>
            </ul>
        </div>
    </footer>
  );
};
