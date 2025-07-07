import React, { useEffect } from 'react';
import '../../assets/styles/ModalWin.css';

interface ModalData {
  imgSrc: string;
  imgAlt: string;
  heading: string;
  description?: string;
}

interface ModalProps {
  modalId: 'tours-modal' | 'gear-modal';
  title: string;
  data: ModalData[];
  type: 'tours' | 'gear';
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ modalId, title, data, type, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isOpen]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && <div id="modalBg" className={isOpen ? 'active' : ''} />}
      <div
        className={`modal-overlay ${isOpen ? 'active' : ''}`}
        id={modalId}
        onClick={handleOverlayClick}
      >
        <div className={type === 'tours' ? 'tours__modal' : 'cards__modal'}>
          <button
            className={type === 'tours' ? 'tours__modal-close' : 'cards__modal-close'}
            onClick={onClose}
          >
            ×
          </button>
          <h2 className={type === 'tours' ? 'tours__modal-title' : 'cards__modal-title'}>
            {title}
          </h2>
          <div
            className={type === 'tours' ? 'tours__cards' : 'cards__modal-all'}
            id={`${type}-cards`}
          >
            {data.map((item, index) => (
              <div key={index} className={type === 'tours' ? 'tours__card' : 'cards__modal-card'}>
                <img
                  src={item.imgSrc}
                  alt={item.imgAlt}
                  className={type === 'tours' ? '' : 'cards__modal-image'}
                />
                <h3 className={type === 'tours' ? '' : 'cards__modal-heading'}>{item.heading}</h3>
                {type === 'tours' && item.description && <p>{item.description}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;