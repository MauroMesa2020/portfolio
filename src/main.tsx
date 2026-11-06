import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import PortfolioApp from './PortfolioApp.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <PortfolioApp />
  </BrowserRouter>,
)
