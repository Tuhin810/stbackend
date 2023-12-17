import { PaymentProps } from "../../../../@types/interfaces/props/PaymentProps/PaymentProps";
import {loadStripe} from '@stripe/stripe-js';
import { getPlanList } from "../../../../utils/apis/subscriptionPlan/planlist";
import { useContext, useEffect, useState } from "react";
import { recruiterContext } from "../../../../context/recruiterDetails/RecruiterContext";

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

    useEffect(() => {
        fetchData();
    }, []);


        // payment integration
        const makePayment = async () => {
            try {
                
                const stripe = await loadStripe("pk_test_51ONCPxSCyxdPDARLC41uMxMZMawWcmsKBDmyvePGhmOy9G7doyN3fqw6OgyT8Tot21wrlYg1VA7jKoIWqih30AAg00uvrKiwBc");
                const headers = {
                    "Content-Type": "application/json"
                };
    
                const response = await fetch("http://localhost:8989/api/create-checkout-session", {
                    method: "POST",
                    headers: headers,
                    body: JSON.stringify({
                        recruiterId: recruiterDetails._id,
                        subscriptionPlanId: payment._id,
                        products: [payment]
                    })
                });
                
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const session = await response.json();
    
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

    return (
        <>
        {/* <div role="listitem" className="bg-white  shadow rounded-lg p-8 relative z-30 mt-3">
            <div onClick={makePayment} className="md:flex items-center justify-between">
                <h2 className="text-2xl font-semibold leading-6 text-gray-800">{payment.plan_name}</h2>
                <p className="text-2xl font-semibold md:mt-0 mt-4 leading-6 text-gray-800">₹{payment.price}/mo</p>
               
                </div>
                
            <p className="md:w-80 text-base leading-6 mt-4 text-gray-600">Full access to all features and no credit card required</p>
        </div>
         */}
        <div className="flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow">
          <div className="text-center">
            <div className="text-lg font-semibold">{payment.plan_name}</div>
            <div className="flex items-center justify-center mt-2">
            <div className="mr-1 text-5xl font-bold">₹{payment.price}</div>
              <div className="text-gray-700">/ mo</div>
            </div>
            <div className="mt-2 space-y-3">
              <div className="text-gray-700">10 deploys per day</div>
              <div className="text-gray-700">10 GB of storage</div>
              <div className="text-gray-700">20 domains</div>
            </div>
          </div>
          <div>
            <div
            onClick={makePayment}
             
              className="cursor-pointer inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
            >
              Buy Plan
            </div>
            <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
              Sed ut unde omnis iste natus accusantium doloremque.
            </p>
          </div>
        </div>
        </>
    );
}

export default PaymentPage;