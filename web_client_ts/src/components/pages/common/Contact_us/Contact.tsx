;
import contact from '../../../assets/images/Contact_us.jpg'
import ayan from '../../../assets/images/ayan.jpeg'
const Contact = () => {
  return (
    <div className="flex flex-col h-screen">    
    <div className="h-5/6 container   bg-[#AEE2FF]  lg:my-8 lg:mx-32 lg:p-30 lg:flex lg:items-center lg:justify-center p-100 rounded-lg">
    <div className="container ">
   
      <main className="flex flex-col lg:flex-row my-8 justify-between ">
        <img src={contact} alt="Contact us" className="lg: rounded-md h-[29rem] w-96   " />
        <div className="lg:w-1/2 lg:pr-8 ">
          <h1 className="text-4xl font-bold text-red-600 mb-4 ">Need Support</h1>
          <p className="text-gray-600 mb-8">Contact us for further help</p>
          <form className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-gray-700 mb-2">Name</label>
              <input type="text" id="name" name="name" className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200" placeholder="Enter your name" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-700 mb-2">Email</label>
              <input type="email" id="email" name="email" className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200" placeholder="Enter your email" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="text-gray-700 mb-2">Message</label>
              <textarea id="message" name="message" className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200" placeholder="Enter your message"></textarea>
            </div>
            <div className='flex justify-end'>
            <button type="submit" className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-200 lg:justify-end">Submit</button>
            </div>
          </form>
        </div>

      </main>
      
    </div>
    </div>
    <div className="flex flex-col h-screen">    
    <div className="h-5/6 container   bg-[#AEE2FF]  lg:my-8 lg:mx-32 lg:p-30 lg:flex lg:items-center lg:justify-center p-100 rounded-lg">
    <div className="container ">
   
      <main className="flex flex-col lg:flex-row my-8 justify-between ">
        <img src={ayan} alt="Contact us" className="lg: rounded-md h-[29rem] w-96   " />
        <div className="lg:w-1/2 lg:pr-8 ">
          <form className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-gray-700 mb-2">Address</label>
             <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic perferendis veniam dolores quidem libero ipsam? Illum, voluptate! Consequuntur labore facilis sint. Quidem, unde eum commodi quibusdam architecto animi dicta obcaecati?</h1>
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-700 mb-2">ph no</label>
              <h1>98787686876</h1>
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="text-gray-700 mb-2">gmail</label>
<h1>degtdt@gmail.com</h1>
            </div>

          </form>
        </div>

      </main>
      
    </div>
    </div>
    </div>
    </div>
    
    
  );
};

export default Contact;

