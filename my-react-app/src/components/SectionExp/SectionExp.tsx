import '../../assets/styles/SectionExp.css';
import '../../assets/styles/Container.css';

type ExpProps = {
  openModal: () => void;
};

export const SectionExp = ({ openModal }: ExpProps) => {
  return (
    <section className="section-experiencies" id="experiencies">
      <div className="container">
        <p className="container__caption">ОПЫТ</p>
        <h2 className="container__slogan">Погрузитесь в <span className="slogan_colored">магию океана</span></h2>
        <p className="container__text">Отправляйтесь в наши уникальные экскурсии, чтобы ощутить связь с китами и
          морской жизнью в их природной среде. Создайте незабываемые моменты, которые останутся в вашей памяти
          навсегда.</p>
        <button className="container__button openModal" id="learn-more-tours" onClick={openModal}>ИСПЫТАТЬ ЭТО СЕЙЧАС</button>
      </div>
      <img src="./public/images/1117876.png" alt="" className="section-experiencies__img"/>
    </section>
  );
};
