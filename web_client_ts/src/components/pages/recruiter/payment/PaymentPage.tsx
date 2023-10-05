import { PaymentProps } from "../../../../@types/interfaces/props/PaymentProps/PaymentProps";
import { logo } from "../../../../assets/images";
const PaymentPage = ({price,package_name}:PaymentProps) => {
    const loadScript = (src: string) => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }
    const displayRazorpay = async () => {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }

        const options = {
            key: "rzp_test_jEoQb1iBVreRa1", // Enter the Key ID generated from the Dashboard
            amount: (price*100*12).toString(),
            currency: 'INR',
            name: "StarMark ",
            description: "Test Transaction",
            image: {logo},
            handler: () => {

            },
            prefill: {
                name: "Soumya Dey",
                email: "SoumyaDey@example.com",
                contact: "9999999999",
            },
            notes: {
                address: "Soumya Dey Corporate Office",
            },
            theme: {
                color: "#61dafb",
            },
        };

        const paymentObject = new (window as any).Razorpay(options);
        paymentObject.open();
    }

    return (
        <div role="listitem" className="bg-white cursor-pointer shadow rounded-lg p-8 relative z-30 mt-3" onClick={displayRazorpay}>
            <div className="md:flex items-center justify-between">
                <h2 className="text-2xl font-semibold leading-6 text-gray-800">{package_name}</h2>
                <p className="text-2xl font-semibold md:mt-0 mt-4 leading-6 text-gray-800">₹{price}/mo</p>
            </div>
            <p className="md:w-80 text-base leading-6 mt-4 text-gray-600">Full access to all features and no credit card required</p>
        </div>
    );
}

export default PaymentPage;