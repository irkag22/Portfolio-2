import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import AboutMe from "./components/aboutMe";
import Footer from "./components/footer";
import { useState } from "react";
import Portfolio from "./components/portfolio";

function App() {
  const [currentPage, setCurrentPage] = useState("Portfolio");
  function renderPage() {
    if (currentPage === "About") {
      return <AboutMe />;
    } else if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
  }
  return (
    <div className="App">
      <Header setCurrentPage={setCurrentPage}/>

      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
