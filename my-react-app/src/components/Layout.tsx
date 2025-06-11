import { Header } from './Header/Header';
import { Modal } from './Modal/Modal';
import { Footer } from './Footer/Footer';

interface LayoutProps {
  children: React.ReactNode;
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const Layout = ({ children, isModalOpen, openModal, closeModal }: LayoutProps) => {
  return (
    <>
      <Header openModal={openModal} />
      <Modal isModalOpen={isModalOpen} closeModal={closeModal} />
      <main>{children}</main>
      <Footer />
    </>
  );
};