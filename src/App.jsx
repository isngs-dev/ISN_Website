import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { UIProvider } from './context/UIContext';
import Layout from './layouts/Layout';

import Home from './pages/Home/Home';
import Solutions from './pages/Solutions/Solutions';
import DigitalGrowth from './pages/DigitalGrowth/DigitalGrowth';
import ConversionLandingPages from './pages/ConversionLandingPages/ConversionLandingPages';
import CRMAutomation from './pages/CRMAutomation/CRMAutomation';
import CustomAIAutomation from './pages/CustomAIAutomation/CustomAIAutomation';
import Roofing from './pages/Roofing/Roofing';
import Franchise from './pages/Franchise/Franchise';
import MysteryShopping from './pages/MysteryShopping/MysteryShopping';
import MysteryShoppingEditing from './pages/MysteryShoppingEditing/MysteryShoppingEditing';
import AIProducts from './pages/AIProducts/AIProducts';
import AISalesAssistant from './pages/AISalesAssistant/AISalesAssistant';
import AISalesEngine from './pages/AISalesEngine/AISalesEngine';
import ShopperRecruitment from './pages/ShopperRecruitment/ShopperRecruitment';
import MSIntelligence from './pages/MSIntelligence/MSIntelligence';
import CaseStudies from './pages/CaseStudies/CaseStudies';
import About from './pages/About/About';
import Insights from './pages/Insights/Insights';
import Contact from './pages/Contact/Contact';
import Privacy from './pages/Legal/Privacy';
import Terms from './pages/Legal/Terms';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <HelmetProvider>
      <UIProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/solutions/digital-growth" element={<DigitalGrowth />} />
            <Route path="/solutions/landing-pages" element={<ConversionLandingPages />} />
            <Route path="/solutions/crm-automation" element={<CRMAutomation />} />
            <Route path="/solutions/custom-ai" element={<CustomAIAutomation />} />
            <Route path="/industries/roofing" element={<Roofing />} />
            <Route path="/industries/franchise-growth" element={<Franchise />} />
            <Route path="/industries/mystery-shopping" element={<MysteryShopping />} />
            <Route path="/mystery-shopping/editing" element={<MysteryShoppingEditing />} />
            <Route path="/ai-products" element={<AIProducts />} />
            <Route path="/ai-products/sales-assistant" element={<AISalesAssistant />} />
            <Route path="/ai-products/sales-engine" element={<AISalesEngine />} />
            <Route path="/ai-products/shopper-recruitment" element={<ShopperRecruitment />} />
            <Route path="/ai-products/ms-intelligence-dashboard" element={<MSIntelligence />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/about" element={<About />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </UIProvider>
    </HelmetProvider>
  );
}

export default App;
