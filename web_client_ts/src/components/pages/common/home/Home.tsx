import FrequentlyAskedQuestion from '../frequentlyAskedQuestion/FrequentlyAskedQuestion';
import Testimonial from '../Testimonial/Testimonial';
import { showModal } from '../../../../utils/commonFunctions/HandleModal';
import CommonModal from '../../../shared/modal/CommonModal';
import { useState } from 'react';
import Features from '../features/Features';
import CompanyList from '../companyList/CompanyList';
import Stats from '../stats/Stats';
import Hero from '../hero/Hero';
import CustomerReview from '../../../shared/customerReview/CustomerReview';
import modeImg from "../../../../assets/images/modelImg.svg"

const Home = () => {
    const modalId='home-modal'
    const [action,setAction] =useState<string>('');
    const handleLoginButton = () => {
        setAction('login')
        showModal(modalId);
    }
    const handleSignUpButton = () => {
        setAction('signup')
        showModal(modalId);
    }
    return (
        <>
            <div className="fixed layout top-0 z-10 w-full">
                {/* <ComplexNavbar/> */}
            </div>
                <div className="home-page">
                    <Hero handleLoginButton={handleLoginButton} handleSignUpButton={handleSignUpButton}/> 
                    <CommonModal leftButtonLink={`/recruiter/${action}`} leftRoute={true} leftButtonText='Employer' rightButtonLink={`/applicant/${action}`} rightRoute={true} rightButtontext='Job Seeker' message={`${action} As a`} id={modalId} Img={modeImg} />
                    <Stats/>
                    <Features/>
                    <Testimonial />
                    <CustomerReview/>
                    <CompanyList />
                    <FrequentlyAskedQuestion />

                    <div className="my-5"></div>

                </div>
             </>
    )
}

export default Home;
