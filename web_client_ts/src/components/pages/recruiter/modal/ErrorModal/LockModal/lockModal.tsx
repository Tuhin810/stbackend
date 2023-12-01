import { useNavigate } from "react-router-dom";
import "./lockModal.css"
import { hideModal } from "../../../../../../utils/commonFunctions/HandleModal";
import { logo } from "../../../../../../assets/images";

export const LockModal = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate('/employer/pricing');
        hideModal("lockPage")
    }
    return (
        <div id="lockPage" className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm hidden">
            <div className="relative w-full flex justify-center max-w-md max-h-full">

                <div className="card relative">
                    
                    <div className="header">
                        <div className="image">
                            <img src={logo} alt="starmark"/>
                        </div>
                        <div className="content">
                            <span className="title text-indigo-500">Go Premium</span>
                            <p className="message">Thank you for your purchase. you package will be delivered within 2 days of your purchase</p>
                        </div>
                        <div className="actions">
                            <button onClick={goBack} className="history bg-indigo-700">Buy Subscription</button>

                        </div>
                    </div>
                </div>




            </div>
        </div>
    )
}
