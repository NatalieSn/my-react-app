import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';
import { RegModal } from './RegModal/RegModal';
import { Footer } from './Footer/Footer';

interface LayoutProps {
  isModalOpen: boolean;
  openModal: (modalId: string) => void;
  closeModal: (modalId: string) => void;
}

export const Layout = ({ isModalOpen, openModal, closeModal }: LayoutProps) => {
  return (
    <>
      <Header openModal={() => openModal('reg-modal')} />
      <RegModal isModalOpen={isModalOpen} closeModal={() => closeModal('reg-modal')} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};