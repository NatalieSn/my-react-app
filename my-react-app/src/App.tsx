import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { CardsPage } from './pages/CardsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import usePreloader from './hooks/usePreloader';
import useModal from './hooks/useModal';
import { Preloader } from './components/Preloader/Preloader';

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