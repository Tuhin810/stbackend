import { Outlet } from 'react-router-dom'
// import Header from '../../shared/header/Header'
import NavBar from '../../../shared/navbar/NavBar'

const LandingPage = () => {
    return (
        <div>
            {/* <Header/> */}
            <NavBar/>
            <Outlet/>
        </div>
    )
}

export default LandingPage
