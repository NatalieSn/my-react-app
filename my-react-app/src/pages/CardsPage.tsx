import { useSearchParams } from 'react-router-dom';
import { CardList } from '../components/CardList/CardList';
import '../assets/styles/SectionReviews.css';
import '../assets/styles/Container.css';

interface CardsPageProps {
  openModal: (modalId: string) => void;
}

export const CardsPage = ({ openModal }: CardsPageProps) => {
  const [searchParams] = useSearchParams();
  const limit = parseInt(searchParams.get('limit') || '4', 10);

  return (
    <section className="section-reviews">
      <div className="container">
        <h2 className="container__slogan">
          Отзывы <span className="slogan_colored">путешественников</span> о нас
        </h2>
        <p className="container__text">
          Прочтите вдохновляющие истории дайверов, которые пережили волшебство плавания с китами в бескрайних просторах океана. Их эмоции и впечатления раскроют, почему это приключение незабываемо!
        </p>
        <button
          className="container__button"
          onClick={() => openModal('reg-modal')}
        >
          ЗАБРОНИРОВАТЬ СЕЙЧАС
        </button>
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