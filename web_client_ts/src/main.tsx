import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import GlobalState from './context/GlobalDetails/GlobalState.tsx'
import UserState from './context/applicantDetails/ApplicantState.tsx'
import RecruiterState from './context/recruiterDetails/RecruiterState.tsx'
import ApplicantState from './context/applicantDetails/ApplicantState.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  
    <GlobalState>
      <ApplicantState>
        <RecruiterState>
          <App />
        </RecruiterState>
      </ApplicantState>
    </GlobalState>
  
)
