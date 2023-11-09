
import "./general.css"
import Header from "./components/Header"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Certifications from "./components/Certifications"
import Preview from "./components/Preview"




function App() {

  return (
    <>
    <Header/>
    <main class="main">
      <Skills/>
      <Preview/>
    </main>
    <Experience/>
    <Certifications/>
    </>
  )
}

export default App
