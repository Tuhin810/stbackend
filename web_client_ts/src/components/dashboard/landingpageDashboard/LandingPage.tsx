import { Outlet } from 'react-router-dom'
import Header from '../../shared/header/Header'

const LandingPage = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
}

export default LandingPage
