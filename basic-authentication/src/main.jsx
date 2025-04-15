import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom'
import './index.css'
import '@aws-amplify/ui-react/styles.css'
import Router from './Router'
import 'antd/dist/reset.css'

import { BrowserRouter } from 'react-router-dom'

import { Amplify } from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </StrictMode>,
)
