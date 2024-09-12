import {StrictMode, Suspense} from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LoadingScreen from "./components/LoadingScreen/loading-screen.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Suspense fallback={<LoadingScreen />}>
          <App />
      </Suspense>
  </StrictMode>,
)
