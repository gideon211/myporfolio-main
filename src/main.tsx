import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init({
  duration: 1000, // animation duration
  once: true,     // whether animation should happen only once
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
