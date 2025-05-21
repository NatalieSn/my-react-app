import { Header } from "./header/Header";
import { Modal } from "./modal/Modal";
import { Footer } from "./footer/Footer";

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