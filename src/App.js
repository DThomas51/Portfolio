import './App.css';
import React from "react"
import Layout from "./components/layout"
import Header from "./components/Header"
import Work from "./components/Work"
import About from "./components/about"
import Skills from "./components/skills"
import Footer from "./components/Footer"

function App() {
  return (
    <Layout>
        <Header/>
        <Work/>
        <About/>
        <Skills/>
        <Footer/>
    </Layout>
  );
}

export default App;
