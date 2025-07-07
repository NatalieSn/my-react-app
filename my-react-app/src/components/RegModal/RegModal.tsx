import '../../assets/styles/Modal.css';
import '../../types/script.js';

type ModalProps = {
  isModalOpen: boolean;
  closeModal: () => void;
};

export const RegModal = ({ isModalOpen, closeModal }: ModalProps) => {
  if (!isModalOpen) return null;

  return (
    <>
      {isModalOpen && <div id="modalBg" className={isModalOpen ? 'modal-bg' : ''} />}
      <div id="myModal" className="modal">
        <div className="modal__content">
          <span className="cards__modal-close" onClick={closeModal}>
            ×
          </span>
          <h2 className="modal__header">Регистрация</h2>
          <form id="myForm">
            <div className="wrapper__input-field">
              <input type="text" required className="wrapper__input" />
              <label className="wrapper__input-label">Имя...</label>
            </div>
            <div className="wrapper__input-field">
              <input type="text" required className="wrapper__input" />
              <label className="wrapper__input-label">Эл. почта...</label>
            </div>
            <div className="wrapper__input-field">
              <input type="tel" required className="wrapper__input" />
              <label className="wrapper__input-label">Номер телефона...</label>
            </div>
            <div className="wrapper__input-field">
              <input type="password" required className="wrapper__input" />
              <label className="wrapper__input-label">Пароль...</label>
            </div>
            <div className="wrapper__forget">
              <label htmlFor="remember" className="wrapper__forget-label">
                <input type="checkbox" id="remember" className="wrapper__forget-input" />
                <p className="wrapper__forget-text">Запомнить меня</p>
              </label>
              <a href="#" className="wrapper__link">Забыли пароль?</a>
            </div>
            <button type="submit" className="wrapper__button">Зарегистрироваться</button>
            <div className="wrapper__register">
              <a href="#">Уже есть аккаунт?</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};