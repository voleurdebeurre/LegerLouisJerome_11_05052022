import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/global.css';
import App from './views/App';
import { BrowserRouter,
        Routes,
        Route
      } from 'react-router-dom';

import About from "./routes/About.js";
import Single from "./views/Single.js";
import PageNotFound from "./views/PageNotFound.js";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route name="erreur404" path="*" element={<PageNotFound />} />
      <Route path="/" element={<App />} />
      <Route path="about" element={<About />} />
      <Route path="logements/:id" element={<Single />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
