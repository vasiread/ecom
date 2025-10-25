import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { SegmentProvider } from './Context/segmentContext.jsx';
import './index.css';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SegmentProvider>
      <App />
    </SegmentProvider>
  </StrictMode>,
)
