import { Layout } from "./components/Layout";
import { MainBlock } from "./components/MainBlock/MainBlock";
import { SectionFeatured } from "./components/SectionFeatured/SectionFeatured";
import { SectionSounds } from "./components/SectionSounds/SectionSounds";
import { SectionPlugins } from "./components/SectionPlugins/SectionPlugins";
import { SectionStudio } from "./components/SectionStudio/SectionStudio";
import { SectionReviews } from "./components/SectionReviews/SectionReviews";
import { SectionAdvantages } from "./components/SectionAdvantages/SectionAdvantages";
import { SectionJobs } from "./components/SectionJobs/SectionJobs";
import usePreloader from "./hooks/usePreloader";
import useModal from "./hooks/useModal";
import { Preloader } from "./components/Preloader/Preloader";

function App() {
  const { isLoading } = usePreloader(1500);
  const { isModalOpen, openModal, closeModal } = useModal();

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <Layout isModalOpen={isModalOpen} openModal={openModal} closeModal={closeModal}>
      <MainBlock />
      <SectionFeatured />
      <SectionSounds />
      <SectionPlugins />
      <SectionStudio />
      <SectionReviews />
      <SectionAdvantages />
      <SectionJobs />
    </Layout>
  );
}

export default App;