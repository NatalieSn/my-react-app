import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';
import { Modal } from './Modal/Modal';
import { Footer } from './Footer/Footer';

interface LayoutProps {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const Layout = ({ isModalOpen, openModal, closeModal }: LayoutProps) => {
  return (
    <>
      <Header openModal={openModal} />
      <Modal isModalOpen={isModalOpen} closeModal={closeModal} />
      <main><Outlet /></main>
      <Footer />
    </>
  );
};