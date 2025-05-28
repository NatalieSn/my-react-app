import { Header } from "./Header/Header";
import { Modal } from "./Modal/Modal";
import { Footer } from "./Footer/Footer";

interface LayoutProps {
  children: React.ReactNode;  // Контент страницы (MainBlock, SectionFeatured и т. д.)
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Modal /> 
      <main>       
        {children}
      </main>
      <Footer />
      </>
  )
}