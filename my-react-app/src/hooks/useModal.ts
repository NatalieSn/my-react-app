import { useState, useEffect, useCallback } from 'react';

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Disable scroll
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; // Enable scroll
  }, []);

  useEffect(() => {
    const handleWindowClick = (event: MouseEvent) => {
      const modal = document.getElementById('myModal');
      if (event.target === modal) {
        closeModal();
      }
    };

    window.addEventListener('click', handleWindowClick);
    return () => window.removeEventListener('click', handleWindowClick);
  }, [closeModal]);

  return { isModalOpen, openModal, closeModal };
};

export default useModal;