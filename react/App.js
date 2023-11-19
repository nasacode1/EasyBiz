import React from 'react';
import './App.css';
import Header from './components/header'
import SearchBar from './components/SearchBar';
import HeroSection from './components/HeroSection';
import WhyChooseSection from './components/WhyChooseSection';
import FeatureSection from './components/FeatureSection';
import ServiceSection from './components/Service';
//import reportWebVitals from './reportWebVitals';
import Footer from './components/Footer';
import Features from './components/Features';


function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <HeroSection/>
      <Features />
      <FeatureSection />
      <WhyChooseSection />
      <ServiceSection />
      <Footer/>
    </div>
  );
}

export default App;
