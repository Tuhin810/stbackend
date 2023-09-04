import Footer from '../footer/Footer';
import HowWorks from '../how_works/HowWorks';
import ServicesList from '../serviceList/ServiceList';
import FrequentlyAskedQuestion from '../frequentlyAskedQuestion/FrequentlyAskedQuestion';
import Testimonial from '../Testimonial/Testimonial';
import Advertisement from '../../../shared/card/Advertisement';
import { showModal } from '../../../../utils/commonFunctions/HandleModal';
import CommonModal from '../../../shared/modal/CommonModal';
import { useState } from 'react';
import Features from '../features/Features';
import CompanyList from '../companyList/CompanyList';
import Stats from '../stats/Stats';
import Hero from '../hero/Hero';
import { FacebookAdd } from './Facebook_Add/FacebookAdd';
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
                <div className="home-page py-10 ">
                    <Hero handleLoginButton={handleLoginButton} handleSignUpButton={handleSignUpButton}/> 
                    <FacebookAdd/>
                    <CommonModal leftButtonLink={`/recruiter/${action}`} leftRoute={true} leftButtonText='Employer' rightButtonLink={`/applicant/${action}`} rightRoute={true} rightButtontext='Job Seeker' message={`${action} As a`} id={modalId} />
                    <Stats/>
                    <Features/>
                    <HowWorks />
                    <CompanyList />
                    <ServicesList />
                    <Advertisement />
                    <Testimonial />
                    <FrequentlyAskedQuestion />

                    <div className="my-5"></div>

                </div>
            <Footer /> </>
    )
}

export default Home;
