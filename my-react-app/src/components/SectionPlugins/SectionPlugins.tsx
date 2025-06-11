import '../../assets/styles/SectionPlugins.css';
import '../../assets/styles/Container.css';

export const SectionPlugins = () => {
  return (
    <section className="section-plugins">
      <img src="./public/images/Logos.png" alt="" className="section-plugins__img" />

      <div className="container">
        <p className="container__caption">PLUGINS</p>
        <h2 className="container__slogan">
          Build your <span className="slogan_colored">digital studio</span>
        </h2>
        <p className="container__text">
          Try industry-leading music software for free? pay it off over time and own it forever.
        </p>
        <button className="container__button">TRY GEAR</button>
      </div>
    </section>
  );
};
