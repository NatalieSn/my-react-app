import { Link } from 'react-router-dom';
import { CardList } from '../components/CardList/CardList';
import { SectionPartners } from '../components/SectionPartners/SectionPartners';
import { SectionTours } from '../components/SectionTours/SectionTours';
import { SectionGear } from '../components/SectionGear/SectionGear';
import { SectionExp } from '../components/SectionExp/SectionExp';
import { SectionAdvantages } from '../components/SectionAdvantages/SectionAdvantages';
import { SectionJobs } from '../components/SectionJobs/SectionJobs';
import { BackToTop } from '../components/BackToTop/BackToTop';
import { MainBlock } from '../components/MainBlock/MainBlock';
import '../assets/styles/SectionReviews.css';
import '../assets/styles/Container.css';

interface HomePageProps {
  openModal: (modalId: string) => void;
}

export const HomePage = ({ openModal }: HomePageProps) => {
  return (
    <>
      <MainBlock openModal={() => openModal('reg-modal')} />
      <SectionPartners />
      <SectionTours openModal={openModal} />
      <SectionGear openModal={openModal} />
      <SectionExp openModal={() => openModal('reg-modal')} />
      <section className="section-reviews">
        <div className="container">
          <h2 className="container__slogan">
            Отзывы <span className="slogan_colored">путешественников</span> о нас
          </h2>
          <p className="container__text">
            Прочтите вдохновляющие истории дайверов, которые пережили волшебство плавания с китами в бескрайних просторах океана. Их эмоции и впечатления раскроют, почему это приключение незабываемо!
          </p>
          <Link to="/cards" className="container__button">ЗАБРОНИРОВАТЬ СЕЙЧАС</Link>
        </div>
        <img
          src="./public/images/reviews_img.png"
          alt="Reviews background"
          className="section-reviews__img"
        />
        <CardList limit={4} />
      </section>
      <SectionAdvantages />
      <SectionJobs />
      <BackToTop />
    </>
  );
};
