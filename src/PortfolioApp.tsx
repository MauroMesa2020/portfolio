import './PortfolioApp.css'
import { Routes, Route } from "react-router-dom";
import Home from './routes/Home'
import About from './routes/About';
import Projects from './routes/Projects';
import ProjectDetails from './routes/ProjectDetails';
import PortfolioLayout from './layouts/PortfolioLayout';


function PortfolioApp() {
  return (

    <Routes>

      <Route element={<PortfolioLayout />}>
        <Route  path="/" element={<Home />}/>
        <Route  path="/about" element={<About />}/>
        <Route  path="/projects" element={<Projects />}/>
        <Route  path="/projects/:slug" element={<ProjectDetails />}/>
      </Route>
    </Routes>
  )
}

export default PortfolioApp
