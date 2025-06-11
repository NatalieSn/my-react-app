import { useSearchParams } from 'react-router-dom';
import { CardList } from '../components/CardList/CardList';
import '../assets/styles/SectionReviews.css';
import '../assets/styles/Container.css';

export const CardsPage = () => {
  const [searchParams] = useSearchParams();
  const limit = parseInt(searchParams.get('limit') || '4', 10);

  return (
    <section className="section-reviews">
      <div className="container">
        <h2 className="container__slogan">
          What <span className="slogan_colored">creators</span> are saying about Splice
        </h2>
        <p className="container__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Augue tellus urna, mi velit diam.
          Turpis diam amet massa id.
        </p>
        <button className="container__button">TRY IT NOW</button>
      </div>
      <img
        src="/images/reviews_img.png"
        alt="Reviews background"
        className="section-reviews__img"
      />
      <CardList limit={limit} />
    </section>
  );
};
