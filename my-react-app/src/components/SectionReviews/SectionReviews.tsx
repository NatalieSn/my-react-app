import '../../assets/styles/SectionReviews.css';
import '../../assets/styles/Container.css';
import { CardList } from '../CardList/CardList';

export const SectionReviews = () => {
    return (
    <section className="section-reviews">
      <div className="container">
        <h2 className="container__slogan">
          Отзывы <span className="slogan_colored">путешественников</span> о нас
        </h2>
        <p className="container__text">
          Прочтите вдохновляющие истории дайверов, которые пережили волшебство плавания с китами в бескрайних просторах океана. Их эмоции и впечатления раскроют, почему это приключение незабываемо!
        </p>
        <button className="container__button">ЗАБРОНИРОВАТЬ СЕЙЧАС</button>
      </div>
      <img
        src="./public/images/reviews_img.png"
        alt="Reviews background"
        className="section-reviews__img"
      />
      <CardList />
    </section>
  );
};
