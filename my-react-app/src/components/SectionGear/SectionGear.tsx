import '../../assets/styles/SectionGear.css';
import '../../assets/styles/Container.css';

interface SectionGearProps {
  openModal: (modalId: string) => void;
}

export const SectionGear = ({ openModal }: SectionGearProps) => {
  return (
    <section className="section-gear" id="gear">
      <img src="/images/diver.png" alt="diver" className="section-gear__img" />

      <div className="container">
        <p className="container__caption">СНАРЯЖЕНИЕ</p>
        <h2 className="container__slogan">
          Экипируйтесь для <span className="slogan_colored">незабываемого</span> погружения
        </h2>
        <p className="container__text">
          Мы предлагаем первоклассное снаряжение для дайвинга — от аренды до покупки —
          с профессиональной поддержкой, чтобы ваше приключение было безопасным и комфортным.
        </p>
        <button
          className="container__button"
          id="learn-more-gear"
          onClick={() => openModal('gear-modal')}
        >
          ОЗНАКОМИТЬСЯ
        </button>
      </div>
    </section>
  );
};