const CustomerReview = () => {
    return (
        <>
            <div className="py-16 bg-gray-50">
                <div className=" mx-auto md:px-16 flex flex-col lg:items-center justify-between lg:flex-row">
                <div className="md:hidden flex justify-center font-sans text-3xl md:text-5xl font-bold leading-none tracking-tight text-gray-800 mb-1">Our customers love</div>
          <div className="md:hidden flex justify-center font-sans text-3xl md:text-5xl font-bold leading-none tracking-tight text-blue-700">what we do</div>
                    <div className="mb-14 xl:mb-0">
                        <h1 className="hidden md:inline text-2xl md:text-4xl w-1/2  font-bold leading-tight   leading-10   text-gray-800 xl:w-2/3 pr-16 lg:pr-0">Our customers love what we do</h1>
                        <p className="hidden md:inline mt-4 text-base leading-normal text-gray-600 md:w-2/3 lg:w-3/4 pr-16 lg:pr-0">Over 500 companies use our product to understand their business and marketing better.</p>
                        <button className="hidden md:block w-full sm:w-auto mt-12 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 flex items-start justify-center sm:justify-start px-8 py-4 bg-indigo-700 hover:bg-gray-600 rounded text-base font-medium leading-none text-center text-white">Read success stories</button>
                    </div>
                    <div role="list" aria-label="Testimonials" className="grid grid-cols-1 gap-6 p-3 md:p-10 flex-wrap justify-center items-start">
                        <div role="listitem" className="bg-white shadow rounded p-4 xl:p-8">
                            <img src="https://cdn.tuk.dev/assets/components/26May-update/quote.png" aria-hidden="true" />
                            <div className="pl-4 pt-4 flex items-start justify-between">
                                <div className="mr-6">
                                    <p className="xl:text-xl xl:leading-loose text-gray-600">This website has a bunch of amazing components which improves my design</p>
                                    <p className="mt-4 text-base font-semibold leading-none text-gray-800">Anna Smith</p>
                                </div>
                                <img src="https://cdn.tuk.dev/assets/components/26May-update/avatar-1.png" alt="Display Avatar of Anna Smith" role="img" />
                            </div>
                        </div>
                        <div role="listitem" className="bg-white shadow rounded p-4 xl:p-8">
                            <img src="https://cdn.tuk.dev/assets/components/26May-update/quote.png" aria-hidden="true" />
                            <div className="pl-4 pt-4 flex items-start justify-between">
                                <div className="mr-6">
                                    <p className="xl:text-xl xl:leading-loose text-gray-600">This website has a bunch of amazing components which improves my design</p>
                                    <p className="mt-4 text-base font-semibold leading-none text-gray-800">Dany John</p>
                                </div>
                                <img src="https://cdn.tuk.dev/assets/components/26May-update/avatar-2.png" alt="Display avatar of Dany John" role="img" />
                            </div>
                        </div>
                        <div role="listitem" className="bg-white shadow rounded p-4 xl:p-8">
                            <img src="https://cdn.tuk.dev/assets/components/26May-update/quote.png" aria-hidden="true" />
                            <div className="pl-4 pt-4 flex items-start justify-between">
                                <div className="mr-6">
                                    <p className="xl:text-xl xl:leading-loose text-gray-600">This website has a bunch of amazing components which improves my design</p>
                                    <p className="mt-4 text-base font-semibold leading-none text-gray-800">Mike Blake</p>
                                </div>
                                <img src="https://cdn.tuk.dev/assets/components/26May-update/avatar-3.png" alt="Display Avatar of Mike Blake" role="img" />
                            </div>
                        </div>
                        <button className="md:hidden w-full sm:w-auto mt-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 flex items-start justify-center sm:justify-start px-8 py-4 bg-indigo-700 hover:bg-gray-600 rounded text-base font-medium leading-none text-center text-white">Read success stories</button>
                    </div>
                </div>
            </div>
            {/* <section className="my-8 bg-gray-100 text-gray-800">
                <div className="container flex flex-col items-center p-4 mx-auto space-y-6 md:p-8">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-16 h-16 text-violet-600">
                        <polygon points="328.375 384 332.073 458.999 256.211 406.28 179.924 459.049 183.625 384 151.586 384 146.064 496 182.756 496 256.169 445.22 329.242 496 365.936 496 360.414 384 328.375 384"></polygon>
                        <path d="M415.409,154.914l-2.194-48.054L372.7,80.933,346.768,40.414l-48.055-2.2L256,16.093,213.287,38.219l-48.055,2.2L139.3,80.933,98.785,106.86l-2.194,48.054L74.464,197.628l22.127,42.715,2.2,48.053L139.3,314.323l25.928,40.52,48.055,2.195L256,379.164l42.713-22.126,48.055-2.195,25.928-40.52L413.214,288.4l2.195-48.053,22.127-42.715Zm-31.646,76.949L382,270.377l-32.475,20.78-20.78,32.475-38.515,1.76L256,343.125l-34.234-17.733-38.515-1.76-20.78-32.475L130,270.377l-1.759-38.514L110.5,197.628,128.237,163.4,130,124.88,162.471,104.1l20.78-32.474,38.515-1.76L256,52.132l34.234,17.733,38.515,1.76,20.78,32.474L382,124.88l1.759,38.515L401.5,197.628Z"></path>
                    </svg>
                    <p className="px-6 py-2 text-2xl font-semibold text-center sm:font-bold sm:text-3xl md:text-4xl lg:max-w-2xl xl:max-w-4xl text-gray-700">"Veniam quidem animi ea maxime odit fugiat architecto perferendis ipsum perspiciatis iusto, provident qui nam dolorum corporis."</p>

                </div>
            </section> */}
        </>
    )
}

export default CustomerReview