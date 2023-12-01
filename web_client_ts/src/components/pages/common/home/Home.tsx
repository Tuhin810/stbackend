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

import { CvScan } from './CVScan/CvScan';

import { useNavigate } from 'react-router-dom';


const Home = () => {
    const modalId='home-modal'
    const navigate=useNavigate();
    const [action,setAction] =useState<string>('');
    const handleLoginButton = () => {
        setAction('login')
        showModal(modalId);
    }
    const handleSignUpButton = () => {
        setAction('signup')
        showModal(modalId);
    }
    const leftMethod = () =>{
        const path=`/employer/${action}`;
        navigate(path);
    }
    const rightMethod = () =>{
        const path=`/jobSeeker/${action}`;
        navigate(path);
    }
    return (
        <>
            <div className="fixed layout top-0 z-10 w-full">
                {/* <ComplexNavbar/> */}
            </div>
                <div className="home-page pt-5">
                    <Hero handleLoginButton={handleLoginButton} handleSignUpButton={handleSignUpButton}/> 
                    <CommonModal leftMethod={leftMethod} leftButtonText='Employer' rightMethod={rightMethod} rightButtontext='Job Seeker' message={`${action} As a`} id={modalId} Img={modeImg} />
                    <Stats/>
                    <Features/>
                    <CvScan/>
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
