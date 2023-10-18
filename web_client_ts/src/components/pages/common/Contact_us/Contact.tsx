import ContactUsForm from "./Contact_Form/ContactUsForm"

const Contact = () => {
  return (
    <div className="bg-[#f5f9ff]/30 py-20">
      <div className="flex justify-center sm:px-10 px-4 flex-wrap">
       <ContactUsForm/>
        <div className="xl:w-1/3 w-full lg:ml-16 md:mt-0 mt-6">
        <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
              className="w-full h-full"
              style={{border:0}}
              allowFullScreen={false}
              aria-hidden={false}
              tabIndex={0}
            />
        </div>
      </div>
    </div>
  )
}

export default Contact