import { Layout } from "./components/Layout";
import { MainBlock } from "./components/MainBlock/MainBlock";
import { SectionFeatured } from "./components/SectionFeatured/SectionFeatured";
import { SectionSounds } from "./components/SectionSounds/SectionSounds";
import { SectionPlugins } from "./components/SectionPlugins/SectionPlugins";
import { SectionStudio } from "./components/SectionStudio/SectionStudio";
import { SectionReviews } from "./components/SectionReviews/SectionReviews";
import { SectionAdvantages } from "./components/SectionAdvantages/SectionAdvantages";
import { SectionJobs } from "./components/SectionJobs/SectionJobs";

function App() {
  return (
    <Layout>
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