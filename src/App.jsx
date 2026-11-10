import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import AboutFirm from './components/AboutFirm';
import PracticeAreas from './components/PracticeAreas';
import Attorneys from './components/Attorneys';
import ConsultationProcess from './components/ConsultationProcess';
import Testimonials from './components/Testimonials';
import Resources from './components/Resources';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-gold focus:px-5 focus:py-2.5 focus:text-ink">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <TrustSection />
        <AboutFirm />
        <PracticeAreas />
        <Attorneys />
        <ConsultationProcess />
        <Testimonials />
        <Resources />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
