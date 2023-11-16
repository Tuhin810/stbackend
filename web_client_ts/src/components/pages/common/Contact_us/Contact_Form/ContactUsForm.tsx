import CallIcon from "../../../../shared/icons/callIcon/CallIcon";
import MailIcon from "../../../../shared/icons/mailIcon/MailIcon";
import MessageIcon from "../../../../shared/icons/messageIcon/MessageIcon";
const ContactUsForm = () => {
  return (
    <>
      <div className="bg-white lg:w-3/5 w-full p-6 shadow-lg">
        <p tabIndex={0} className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800">
          Contact Us
        </p>
        <div className="w-full flex justify-around">
          <button aria-label="Call Us" role="button" className="focus:outline-none focus:ring-2 w-1/3 focus:ring-offset-1 focus:ring-gray-700 p-3 border rounded-lg border-indigo-700 flex items-center mt-10 hover:bg-gray-100">
            <CallIcon />
            <p className="text-base font-medium ml-4 text-indigo-700">Call Us</p>
          </button>
          <button aria-label="Mail Us" role="button" className="focus:outline-none focus:ring-2 w-1/3 focus:ring-offset-1 focus:ring-gray-700 p-3 border rounded-lg border-red-600 flex items-center mt-10 hover:bg-gray-100">
            <MailIcon />
            <p className="text-base font-medium ml-4 text-red-600">Mail Us</p>
          </button>
          
        </div>

        <div className="w-full flex items-center justify-between py-5">
          <hr className="w-full bg-gray-400" />
          <p className="text-base font-medium leading-4 px-2.5 text-gray-500">OR</p>
          <hr className="w-full bg-gray-400" />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium leading-none text-gray-800">
            Name
          </label>
          <input id="name" aria-labelledby="name" type="text" className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2" placeholder="e.g: John Roy " />
        </div>
        <div>
          <div className="mt-2">
          <label htmlFor="contact" className="text-sm font-medium leading-none text-gray-800">
            Email / Phone
          </label>
          <input id="contact" aria-labelledby="contact" type="text" className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2" />
          </div>
        </div>
        <div className="mt-2 w-full">
          <label htmlFor="email" className="text-sm font-medium leading-none text-gray-800">
            Message
          </label>
          <textarea id="msg" className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2" />
        </div>
        <div className="mt-8">
          <button role="button" className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-700 py-4 w-full inline-flex items-center justify-center">
            <span className="me-2">
              Leave A Message
            </span>
            <MessageIcon/>
          </button>
        </div>
      </div>
    </>
  );
}

export default ContactUsForm
