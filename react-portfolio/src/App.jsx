import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar.jsx'
import {Hero} from './components/Hero/Hero.jsx'
import {About} from './components/About/About.jsx'
import { Experience } from './components/Experience/Experience.jsx'

function App() {

  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
    </div>
  )
}

export default App
