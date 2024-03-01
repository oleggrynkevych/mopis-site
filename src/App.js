import './App.scss';
import Header from './components/Header/Header';
import WelcomeSection from './components/WelcomeSection/WelcomeSection';
import DescriptionBlock from './components/DescriptionBlock/DescriptionBlock';
import ProgramBlock from './components/ProgramBlock/ProgramBlock';
import PriceBlock from './components/PriceBlock/PriceBlock';
import ResultBlock from './components/ResultBlock/ResultBlock';
import RespondBlock from './components/RespondBlock/RespondBlock';
import Footer from './components/Footer/Footer';
import AuthorBlock from './components/AuthorBlock/AuthorBlock';
import SpeakerBlock from './components/SpeakerBlock/SpeakerBlock';
import EuroSpeakerBlock from './components/EuroSpeakerBlock/EuroSpeakerBlock';
import FAQBlock from './components/FAQBlock/FAQBlock';
import PublicOffer from './components/PublicOffer/PublicOffer';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import useScrollToTop from './hooks/useScrollToTop';

function App() {
  const location = useLocation();
  const scrollToTop = useScrollToTop();

  useEffect(() => {
    scrollToTop({ behavior: 'smooth' });
  }, [location.pathname, scrollToTop]);

  return (
    <div className="App">
      <Header/>
      <div className='app-container'>
        <Routes>
          <Route path='/' element={
              <div>
                <WelcomeSection/>
                <DescriptionBlock/>
                <ProgramBlock/>
                <PriceBlock/>
                <ResultBlock/>
                <RespondBlock/>
                <AuthorBlock/>
                <SpeakerBlock/>
                <EuroSpeakerBlock/>
                <FAQBlock/>
              </div>
          }/>
          <Route path='/public-offer' element={<PublicOffer/>}/>
          <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
        </Routes>
      </div>
      <Footer/>
      
    </div>
  );
}

export default App;
