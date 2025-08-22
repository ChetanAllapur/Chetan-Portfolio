import './App.css';
import './styles/base.css';
import Home from './pages/home/Home.jsx';
import About from './pages/about/About.jsx';
import Projects from './pages/projects/Projects.jsx';
import Contact from './pages/contact/Contact.jsx';
import Navbar from './components/navbar/Navbar.jsx';   // adjust case if needed
import Footer from './components/footer/Footer.jsx';   // adjust case if needed

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="app-content">
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
