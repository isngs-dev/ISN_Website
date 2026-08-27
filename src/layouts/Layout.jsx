import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import AIChat from '../components/AIChat/AIChat';
import CalendarModal from '../components/CalendarModal/CalendarModal';
import ScrollToTop from '../components/ScrollToTop';

export default function Layout() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <ScrollToTop />
      <Header />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
      <AIChat />
      <CalendarModal />
    </>
  );
}
