import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { UserContextProvider } from './contexts/UserContext'
import { faCheckCircle, faSearch, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import './index.css' //arquivo do tailwind
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faCheckCircle, faSearch, faMagnifyingGlass)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </React.StrictMode>,
)