import { Link } from 'react-router-dom';
import '../assets/styles/SectionReviews.css';
import '../assets/styles/Container.css';

export const NotFoundPage = () => {
  return (
    <section className="section-reviews">
      <div className="container">
        <h2 className="container__slogan">
          <span className="slogan_colored">404</span> Страница не найдена
        </h2>
        <p className="container__text">
          К сожалению, страница, которую вы ищете, не существует.
        </p>
        <Link to="/" className="container__button">
          ВЕРНУТЬСЯ НА ГЛАВНУЮ
        </Link>
      </div>
    </section>
  );
};