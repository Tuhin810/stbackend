
import './home.css';

import SearchBox from '../../shared/searchBox/SearchBox';
import Footer from '../footer/Footer';
import { Companies } from '../../shared/companyList/Companies';
import HowWorks from '../how_works/HowWorks';
import ServicesList from '../../shared/cmpservice/Services';
import NavBar from '../../shared/navbar/NavBar';
import "./home.css"
import { home } from '../../../assets/images';
import A from '../../shared/a/A';
import Testimonial from '../../shared/Testimonial/Testimonial';
const Home = () => {
    return (
<>
<div className="fixed layout top-0 z-10 bg-gray-50 w-full">
    
    
    {/* <ComplexNavbar/> */}
    
    </div>
    <div className="mt-24 ">
        <div className="home-page   pt-10">
            
            <div className='home mb-20'>
                <div className='left-home'>

                    <h2>Unlocking Doors to <span>Success</span> Your <span>Future</span> Starts Here.</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum similique sequi iure! Rem, sapiente! Iste, in ab! Obcaecati iure voluptatum ex cum at dignissimos adipisci! Veritatis, sed voluptatibus. Neque, tempora?
                    </p>
                    <div className='companyWithApplicant-container'>
                        <div className='companyWithApplicant'>
                            <div className='left-company'>
                                <h3>150+</h3>
                                <p>Companies</p>
                            </div>
                            <div className='right-applicant'>
                                <h3>550+</h3>
                                <p>Registered Candidates</p>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <SearchBox />
                    </div>

                </div>
                <div className='right-home'>
                    <img src={home} />
                </div>
            </div>

            {/* home components */}
            <HowWorks/>
          <Companies/>
          <ServicesList/>
          <Testimonial/>
          <A/>
         
          <div className="my-5"></div>
            
        </div></div></>
    )
}

export default Home;
