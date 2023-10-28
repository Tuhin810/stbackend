import { useState } from "react";
import { showModal } from "../../../../../utils/commonFunctions/HandleModal";

export const CvScan = () => {
  const modalId= 'navbar-modal'
  const [, setAction] = useState<string>('');
  const handleSignUpButton = () => {
  
    setAction('signup')
    showModal(modalId);
}
  return (
    <div><section className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <img className="object-cover object-center rounded-lg" alt="QR scan" src="https://storage.googleapis.com/support-kms-prod/mQmcrC93Ryi2U4x5UdZNeyHQMybbyk71yCVm"/>
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font  text-5xl mb-4 font-semibold text-gray-900 ">Get e-CV ready 
          <br className="hidden lg:inline-block "/><span className='text-blue-600'>with just a Scan</span>
        </h1>
        <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
       
        <button onClick={handleSignUpButton} className="px-8 py-3 text-blue-100 rounded bg-gradient-to-r  from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500">Regester Now</button>
     
                              
      </div>
    </div>
  </section></div>
  )
}
