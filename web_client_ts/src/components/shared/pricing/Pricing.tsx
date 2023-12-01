import ApplicantPricing from "./applicantPricing/ApplicantPricing"
import EmployerPricing from "./employerPricing/EmployerPricing"
import PriceCompare from "./priceCompare/PriceCompare"
import { useNavigate } from "react-router-dom"

const Pricing = () => {
  const navigate = useNavigate();
    const handleLoginButton = () => {
      navigate('/jobSeeker/login')
    }
    const handleSignUpButton = () => {
      navigate('/jobSeeker/signup')
    }
  return (
    <div>
        <ApplicantPricing handleLoginButton={handleLoginButton} handleSignUpButton={handleSignUpButton}/>
        <EmployerPricing />
        <PriceCompare/>
    </div>
  )
}

export default Pricing