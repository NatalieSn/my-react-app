import '../../assets/styles/MainBlock.css';
import '../../assets/styles/Container.css';

type MainBlockProps = {
  openModal: () => void;
};

export const MainBlock = ({ openModal }: MainBlockProps) => {
  return (
    <section className="main-block">

      <div className="main-block__container">
        <img src="./public/images/main-block/slogan.png" alt="" className="container__slogan-img"/>
          <p className="container__text">Погрузитесь в магию океана! Раскройте тайны песен китов, ощутите ритм<br/>волн
            и
            обретите гармонию в глубинах безмолвного спокойствия.</p>
          <button className="container__button openModal" onClick={openModal}>ЗАРЕГИСТРИРОВАТЬСЯ</button>
      </div>
      <div className="image-container">
        <img src="./public/images/main-block/side.png" alt="" className="main-block__img"/>
      </div>
    </section>
  );
};
