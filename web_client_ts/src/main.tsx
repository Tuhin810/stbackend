import ReactDOM from 'react-dom/client'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import App from './App.tsx'
import './index.css'
import GlobalState from './context/GlobalDetails/GlobalState.tsx'
import RecruiterState from './context/recruiterDetails/RecruiterState.tsx'
import ApplicantState from './context/applicantDetails/ApplicantState.tsx'
import React from 'react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalState>
      <ApplicantState>
        <RecruiterState>
          <App />
        </RecruiterState>
      </ApplicantState>
    </GlobalState>
  </React.StrictMode>
  
)

serviceWorkerRegistration.register();