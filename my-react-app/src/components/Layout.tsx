import { Header } from "./header/Header";
import { Modal } from "./modal/Modal";
//import { Preloader } from "./preloader/Preloader";
import { Main_block } from "./main-block/Main-block";
import { Section_featured } from "./section-featured/Section-featured";
import { Section_sounds } from "./section-sounds/Section-sounds";
import { Section_plugins } from "./section-plugins/Section-plugins";
import { Section_studio } from "./section-studio/Section-studio";
import { Section_reviews } from "./section-reviews/Section-reviews";
import { Section_advantages } from "./section-advantages/Section-advantages";
import { Section_jobs } from "./section-jobs/Section-jobs";
import { Footer } from "./footer/Footer";

export const Layout = () => {
    return (
        <>
            <Header/>
            <Modal/>
            {/*<Preloader/>*/}
            <Main_block/>
            <Section_featured/>
            <Section_sounds/>
            <Section_plugins/>
            <Section_studio/>
            <Section_reviews/>
            <Section_advantages/>
            <Section_jobs/>
            <Footer/>
        </>
    )
}