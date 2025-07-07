import '../../assets/styles/BackToTop.css';

export const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button className="back-to-top" onClick={scrollToTop}>
        <img src="./public/images/arrow.png" className="back-to-top__arrow"/>
    </button>
  );
};