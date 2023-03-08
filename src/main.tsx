import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import "react-toastify/dist/ReactToastify.css"
import { persistor, store } from './redux/store'
import { Provider } from 'react-redux'
import '/src/index.css'
import { PersistGate } from 'redux-persist/integration/react'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={"loading"} persistor={persistor}>
    <App/>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
