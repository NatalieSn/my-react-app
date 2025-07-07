import { useState, useEffect } from 'react';

interface ModalState {
  [key: string]: boolean;
}

interface ModalHook {
  isModalOpen: ModalState;
  openModal: (modalId: string) => void;
  closeModal: (modalId: string) => void;
}

const useModal = (): ModalHook => {
  const [isModalOpen, setIsModalOpen] = useState<ModalState>({
    'tours-modal': false,
    'gear-modal': false,
    'reg-modal': false,
  });

  const openModal = (modalId: string) => {
    setIsModalOpen((prev) => ({ ...prev, [modalId]: true }));
  };

  const closeModal = (modalId: string) => {
    setIsModalOpen((prev) => ({ ...prev, [modalId]: false }));
  };

  useEffect(() => {
    const toursBtn = document.getElementById('learn-more-tours');
    const gearBtn = document.getElementById('learn-more-gear');

    if (toursBtn) {
      toursBtn.addEventListener('click', () => openModal('tours-modal'));
    }
    if (gearBtn) {
      gearBtn.addEventListener('click', () => openModal('gear-modal'));
    }

    return () => {
      if (toursBtn) {
        toursBtn.removeEventListener('click', () => openModal('tours-modal'));
      }
      if (gearBtn) {
        gearBtn.removeEventListener('click', () => openModal('gear-modal'));
      }
    };
  }, []);

  return { isModalOpen, openModal, closeModal };
};

export default useModal;