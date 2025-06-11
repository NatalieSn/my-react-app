import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { CardsPage } from './pages/CardsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Preloader } from './components/Preloader/Preloader';
import useModal from './hooks/use-modal';
import usePreloader from './hooks/use-preloader';

function App() {
  const { isLoading } = usePreloader(1500);
  const { isModalOpen, openModal, closeModal } = useModal();

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <Routes>
      <Route
        path="/"
        element={<Layout isModalOpen={isModalOpen} openModal={openModal} closeModal={closeModal} />}
      >
        <Route index element={<HomePage />} />
        <Route path="cards" element={<CardsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
