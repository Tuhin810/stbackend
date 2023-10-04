import ReactDOM from 'react-dom/client'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import App from './App.tsx'
import './index.css'
import GlobalState from './context/GlobalDetails/GlobalState.tsx'
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

serviceWorkerRegistration.register();