import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Awards from './components/Awards';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <Profile />
      <Experience />
      <Education />
      <Skills />
      <Awards />
      <Footer />
    </div>
  );
}

export default App;