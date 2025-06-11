import { Link } from 'react-router-dom';
import '../assets/styles/SectionReviews.css';
import '../assets/styles/Container.css';

export const NotFoundPage = () => {
  return (
    <section className="section-reviews">
      <div className="container">
        <h2 className="container__slogan">
          <span className="slogan_colored">404</span> Page Not Found
        </h2>
        <p className="container__text">Sorry, the page you’re looking for doesn’t exist.</p>
        <Link to="/" className="container__button">
          RETURN TO HOME
        </Link>
      </div>
    </section>
  );
};
