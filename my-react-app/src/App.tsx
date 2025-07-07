import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Modal from './components/Modal/Modal';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { CardsPage } from './pages/CardsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Preloader } from './components/Preloader/Preloader';
import useModal from './hooks/use-modal';
import usePreloader from './hooks/use-preloader';

interface ModalData {
  imgSrc: string;
  imgAlt: string;
  heading: string;
  description?: string;
}

interface ModalJson {
  gearData: ModalData[];
  toursData: ModalData[];
}

function App() {
  const { isLoading } = usePreloader(1500);
  const { isModalOpen, openModal, closeModal } = useModal();
  const [modalData, setModalData] = useState<ModalJson>({ gearData: [], toursData: [] });

  useEffect(() => {
    fetch('/data/modals.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch modals.json: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data: ModalJson) => {
        const updatedData = {
          gearData: data.gearData.map((item) => ({
            ...item,
            imgSrc: item.imgSrc.replace('./public', ''),
          })),
          toursData: data.toursData.map((item) => ({
            ...item,
            imgSrc: item.imgSrc.replace('./public', ''),
          })),
        };
        setModalData(updatedData);
      })
      .catch((error) => {
        console.error('Error loading modal data:', error);
      });
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              isModalOpen={isModalOpen['reg-modal'] || false}
              openModal={openModal}
              closeModal={closeModal}
            />
          }
        >
          <Route index element={<HomePage openModal={openModal} />} />
          <Route path="cards" element={<CardsPage openModal={openModal} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <Modal
        modalId="tours-modal"
        title="Актуальные туры"
        data={modalData.toursData}
        type="tours"
        isOpen={isModalOpen['tours-modal'] || false}
        onClose={() => closeModal('tours-modal')}
      />
      <Modal
        modalId="gear-modal"
        title="Мы предлагаем"
        data={modalData.gearData}
        type="gear"
        isOpen={isModalOpen['gear-modal'] || false}
        onClose={() => closeModal('gear-modal')}
      />
    </>
  );
}

export default App;