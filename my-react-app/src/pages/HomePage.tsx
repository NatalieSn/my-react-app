import { CardList } from '../components/CardList/CardList';
import { MainBlock } from '../components/MainBlock/MainBlock';
import { SectionFeatured } from '../components/SectionFeatured/SectionFeatured';
import { SectionSounds } from '../components/SectionSounds/SectionSounds';
import { SectionPlugins } from '../components/SectionPlugins/SectionPlugins';
import { SectionStudio } from '../components/SectionStudio/SectionStudio';
import { SectionAdvantages } from '../components/SectionAdvantages/SectionAdvantages';
import { SectionJobs } from '../components/SectionJobs/SectionJobs';
import '../assets/styles/SectionReviews.css';
import '../assets/styles/Container.css';

export const HomePage = () => {
  return (
    <>
      <MainBlock />
      <SectionFeatured />
      <SectionSounds />
      <SectionPlugins />
      <SectionStudio />
      <section className="section-reviews">
        <div className="container">
          <h2 className="container__slogan">
            Welcome to <span className="slogan_colored">Splice</span>
          </h2>
          <p className="container__text">
            Discover what creators are saying about Splice. Explore our top reviews below.
          </p>
          <button className="container__button">EXPLORE NOW</button>
        </div>
        <img src="/images/reviews_img.png" alt="Reviews background" className="section-reviews__img" />
        <CardList limit={3} />
      </section>
      <SectionAdvantages />
      <SectionJobs />
    </>
  );
};