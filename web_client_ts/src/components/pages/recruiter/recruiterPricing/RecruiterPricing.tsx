import { useEffect, useState } from "react";
import PaymentPage from "../payment/PaymentPage";
import { getPlanList } from "../../../../utils/apis/subscriptionPlan/planlist";
import { loadStripe } from "@stripe/stripe-js";

const RecruiterPricing = () => {
    const [data_, setData] = useState<Array<any> | null>(null);



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


    return (
        <>
            {/* <div className="xl:mx-auto xl:container py-20 2xl:px-0 px-6">
                <div className="lg:flex items-center justify-between">
                    <div className=" lg:w-1/2 w-full">
                        <p className="text-base leading-4 text-gray-600">Choose your plan</p>
                        <h1 role="heading" className="md:text-5xl text-3xl font-bold leading-10 mt-3 text-gray-800">
                            Our pricing plan
                        </h1>
                        <p role="contentinfo" className="text-base leading-5 mt-5 text-gray-600">
                            We’re working on a suit of tools to make managing complex systems easier, for everyone for free. we can’t wait to hear what you think
                        </p>
                        <div className="w-56">
                            <div className="bg-gray-100 shadow rounded-full flex items-center mt-10">
                                <button className="bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none text-gray-600 rounded-full py-4 px-6 mr-1" id="monthly">
                                    Monthly
                                </button>
                                <button className="bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none text-white rounded-full py-4 px-6" id="annually">
                                    Annually
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="xl:w-1/2 lg:w-7/12 relative w-full lg:mt-0 mt-12 md:px-8" role="list">
                        <img src="https://i.ibb.co/0n6DSS3/bgimg.png" className="absolute w-full -ml-12 mt-24" alt="background circle images" />
                        {
                        (data_)?   data_!.map((item:any, index:any) => (
                            <PaymentPage
                              key={index}
                              price={item.price}
                              plan_name={item.plan_name}
                            />
                          )):null
                     }
                      
                    </div>

                   
                </div>
            </div> */}
            <div className="px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Our Pricing
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="7e5e8ff8-1960-4094-a63a-2a0c0f922d69"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#7e5e8ff8-1960-4094-a63a-2a0c0f922d69)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Transparent</span>
          </span>{' '}
          pricing. Pay as you grow.
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
      </div>
      <div className="grid max-w-md gap-10 row-gap-5 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">

      {
                        (data_)?   data_!.map((item:any, index:any) => (
                            <PaymentPage
                                key={index}
                                price={item.price}
                                plan_name={item.plan_name} _id={item._id}                            />
                          )):null
                     }
      </div>
    </div>
        </>
    );
}

export default RecruiterPricing
