import { Outlet } from 'react-router-dom'
// import Header from '../../shared/header/Header'
import NavBar from '../../../shared/navbar/NavBar'
import Footer from '../../common/footer/Footer'

const LandingPage = () => {
    return (
        <div>
            {/* <Header/> */}
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default LandingPage
