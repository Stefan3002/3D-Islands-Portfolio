import {StrictMode, Suspense} from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {PersistGate} from "redux-persist/integration/react";
import LoadingScreen from "./components/LoadingScreen/loading-screen.jsx";
import {persistor, store} from "../utils/store/store.js";
import {Provider} from "react-redux";
import Preloader from "./components/Preloader/preloader.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider store={store}>
          {/*<PersistGate loading={<LoadingScreen />} persistor={persistor}>*/}
          <Suspense fallback={<LoadingScreen />}>
              <Preloader type={0} />
          </Suspense>
          <App />
          {/*</PersistGate>*/}
      </Provider>
  </StrictMode>,
)
