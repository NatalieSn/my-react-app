import '../../assets/styles/SectionPartners.css';

export const SectionPartners = () => {
  return (
    <section className="section-partners" id="partners">
      <p className="section-partners__caption">НАШИ ПАРТНЕРЫ</p>
      <div className="section-partners__marquee">
        <div className="section-partners__list" id="marquee">
          <img src="./public/images/natgeog.png" alt="" className="section-partners__img" />
          <img src="./public/images/wwf.png" alt="" className="section-partners__img" />
          <img src="./public/images/humane.svg" alt="" className="section-partners__img" />
          <img src="./public/images/noroot.png" alt="" className="section-partners__img" />
          <img src="./public/images/l.svg" alt="" className="section-partners__img" />
        </div>
      </div>
    </section>
  );
};
