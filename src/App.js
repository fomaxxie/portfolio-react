import './App.css';
import Home from "./components/home/home"
import About from "./components/about/about"
import Services from "./components/services/services"
import Projects from "./components/projects/projects"
import Footer from "./components/footer/footer"
import Contact from "./components/contact/contact"

function App() {

  return (
    <div className = "container-main gradient-background">
    <>
      <Home />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
    </div>
  );
}

export default App;
