import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar' 
import TerminosCondiciones from './pages/FooterContent/TerminosCondiciones'

function App() {
  return (
    <>
      <NavBar/>
      <main>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/novedades" element={<News />} /> */}
          {/* <Route path="/events" element={<Events />} /> */}
          {/* <Route path="/galery" element={<Galery />} /> */}
          {/* <Route path="/greenDistrict" element={<GreenDistrict />} /> */}
          {/* <Route path="/nosotros" element={<AboutUs />} /> */}

          <Route path='/terminos-y-condiciones' element={<TerminosCondiciones/>}/>
          <Route path='/politica-de-privacidad' element={<TerminosCondiciones/>}/>
          {/* <Route path='/prensa' element={<TerminosCondiciones/>}/> */}
        </Routes>
      </main>
      <Footer/>
    </>
  )
}

export default App
