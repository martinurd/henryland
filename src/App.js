import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HomePage from './Views/HomePage';
import FAQs from './Views/FAQs';
import Privacy from './Views/Privacy';
import Terms from './Views/Terms';
import ApplicationForm from './Views/ApplicationForm';
import NotFound from './Views/NotFound';
import Document from './Components/Document';
import NoScript from './Components/NoScript';
import ErrorBoundary from './Components/ErrorBoundary';
import './firebase';
import './index.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
      offset: 50,
    });
  }, []);

  return (
    <ErrorBoundary>
      <NoScript />
      <Document>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/application" element={<ApplicationForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </Document>
    </ErrorBoundary>
  );
}

export default App;
