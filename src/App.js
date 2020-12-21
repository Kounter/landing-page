import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import MainLanding from './components/mainLanding';
import IntegrationsSection from './components/integrations';
import HowWeHelp from './components/howWeHelp';
import Practice from './components/practice';
import DemoSection from './components/demo';
import Testimonials from './components/testimonials';
import PricingSection from './components/pricing';
import EndingSection from './components/endingSection';
import Footer from './components/footer';

import './styles/components.scss';
import './common.scss';
import './styles/customslick.scss';

function App() {
  return (
    <div className="App">
      <header className="">
        <Header />
      </header>
      <MainLanding />
      <IntegrationsSection />
      <HowWeHelp />
      <Practice />
      <DemoSection />
      <Testimonials />
      <PricingSection />
      <EndingSection />
      <Footer />
    </div>
  );
}

export default App;
