import "./App.css";
import Header from "./components/header";
import AboutMe from "./components/aboutMe";
import Footer from "./components/footer";
import Portfolio from "./components/portfolio";
import Resume from "./components/resume";
import Contact from "./components/contact";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("About");
  function renderPage() {
    if (currentPage === "About") {
      return <AboutMe />
    } else if (currentPage === "Portfolio") {
      return <Portfolio />
    } else if (currentPage === "Resume") {
      return <Resume />
    } else if (currentPage === "Contact") {
      return <Contact />
    }
  }; 
  return (
    <div className="App">
      <Header setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
