import { PaymentProps } from "../../../../@types/interfaces/props/PaymentProps/PaymentProps";
import {loadStripe} from '@stripe/stripe-js';
import { getPlanList } from "../../../../utils/apis/subscriptionPlan/planlist";
import { useContext, useEffect, useState } from "react";
import { recruiterContext } from "../../../../context/recruiterDetails/RecruiterContext";
import { paymentbyStrapi } from "../../../../utils/apis/recruiter/recruiter";

const PaymentPage = (payment:PaymentProps) => {
    const [data_, setData] = useState<Array<any> | null>(null);

    const {recruiterDetails} = useContext(recruiterContext).recruiterloggedinDetails;
    const { dispatch } = useContext(recruiterContext);
    // Fetch data when the component mounts
    const fetchData = async () => {
        try {
            const response = await getPlanList();
          
            setData(response?.data.data); // Set the fetched data to the state
            console.log('Fetched Data:', response?.data.data);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
        // payment integration
        const makePayment = async () => {
            try {
                
                const stripe = await loadStripe("pk_test_51ONCPxSCyxdPDARLC41uMxMZMawWcmsKBDmyvePGhmOy9G7doyN3fqw6OgyT8Tot21wrlYg1VA7jKoIWqih30AAg00uvrKiwBc");
               
                const response = await paymentbyStrapi({
                    recruiterId: recruiterDetails._id,
                    subscriptionPlanId: payment._id,
                    products: [payment]
                });  
                if (response?.status!==200) {
                    throw new Error(`HTTP error! Status: ${response?.status}`);
                }
                
                
                dispatch({ type: "updateDetails", payload: response?.data.data });
                const session = response.data;
                const result = await stripe?.redirectToCheckout({
                    sessionId: session.id
                });
                if (result) {
                    console.error("Error redirecting to checkout:", result.error);
                }
            } catch (error) {
                console.error("Error making payment:", error);
            }
        };
        useEffect(() => {
            fetchData();
        }, []);
    return (
        <>
        <div className="flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow">
          <div className="text-center">
            <div className="text-lg font-semibold">{payment.plan_name}</div>
            <div className="flex items-center justify-center mt-2">
            <div className="mr-1 text-5xl font-bold">₹{payment.price}</div>
              <div className="text-gray-700">/ mo</div>
            </div>
            <div className="mt-2 space-y-3">
              <div className="text-gray-700">{payment.details}</div>
              <div className="text-gray-700">{payment.job_limit} job limit</div>
              <div className="text-gray-700">{payment.no_validity_dates} days validity</div>
            </div>
          </div>
          <div>
            <div
            onClick={makePayment}
             
              className="cursor-pointer mb-6 inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-[#2d5977] rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
            >
              Buy Plan
            </div>
            
          </div>
        </div>
        </>
    );
}

export default PaymentPage;