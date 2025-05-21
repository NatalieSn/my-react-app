import { Header } from "./header/Header";
import { Modal } from "./modal/Modal";
//import { Preloader } from "./preloader/Preloader";
import { MainBlock } from "./MainBlock/MainBlock";
import { SectionFeatured } from "./SectionFeatured/SectionFeatured";
import { SectionSounds } from "./SectionSounds/SectionSounds";
import { SectionPlugins } from "./SectionPlugins/SectionPlugins";
import { SectionStudio } from "./SectionStudio/SectionStudio";
import { SectionReviews } from "./SectionReviews/SectionReviews";
import { SectionAdvantages } from "./SectionAdvantages/SectionAdvantages";
import { SectionJobs } from "./SectionJobs/SectionJobs";
import { Footer } from "./footer/Footer";

export const Layout = () => {
    return (
        <>
            <Header/>
            <Modal/>
            {/*<Preloader/>*/}
            <MainBlock/>
            <SectionFeatured/>
            <SectionSounds/>
            <SectionPlugins/>
            <SectionStudio/>
            <SectionReviews/>
            <SectionAdvantages/>
            <SectionJobs/>
            <Footer/>
        </>
    )
}