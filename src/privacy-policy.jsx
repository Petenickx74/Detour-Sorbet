import React from 'react';
import ReactDOM from 'react-dom/client';
import LegalPage from './pages/LegalPage';
import { privacyPolicyPage } from './data/legalContent';
import './styles/legal.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LegalPage page={privacyPolicyPage} />
  </React.StrictMode>,
);
