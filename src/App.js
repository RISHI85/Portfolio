import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';

const App = () => {

  useEffect(() => {
    document.title = "Rishi";
    const revealOnScroll = () => {
      const revealElements = document.querySelectorAll(
        ".reveal, .reveal-left, .reveal-right, .reveal-up"
      );
  
      revealElements.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementBottom = el.getBoundingClientRect().bottom;
        const elementVisible = 100;
  
        if (
          elementTop < windowHeight - elementVisible &&
          elementBottom > elementVisible
        ) {
          el.classList.add("active");
        } else {
          el.classList.remove("active");
        }
      });
    };
  
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // initial check
  
    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);
  

  return (
    <>
      <Navbar />
      <main className="main-content">
        <Home />
      </main>
    </>
  );
};

export default App;
