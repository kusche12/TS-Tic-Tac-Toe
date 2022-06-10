import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import { Provider } from 'react-redux';
import store from './state/store';

import StartGamePage from './pages/StartGamePage';
import GamePage from './pages/GamePage';
import EndGamePage from './pages/EndGamePage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<StartGamePage />} />
              <Route path="/game" element={<GamePage />} />
              <Route path="/end" element={<EndGamePage />} />
              <Route
                path="*"
                element={
                  <main style={{ padding: "1rem" }}>
                    <p>404 not found!</p>
                  </main>
                }
              />
            </Routes>
          </BrowserRouter>
        </div>
      </Provider>
  </React.StrictMode>
);
