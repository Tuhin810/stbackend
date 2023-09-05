const JoinUsFaceBook = () => {
    return (


        <div className="w-full bg-gradient-to-r from-blue-500 to-blue-400 md:py-8 md:px-8 px-5 py-4 md-px-10">
            <div>
                <div className="flex flex-wrap items-center md:flex-row flex-col-reverse">
                    <div className="md:w-2/3 w-full pb-6 md:pb-0 md:pr-6 flex-col md:block flex items-center justify-center md:pt-0 pt-4">
                        <div>
                            <h1 role="heading" className="text-lg md:text-xl lg:text-3xl xl:text-3xl lg:w-10/12 text-white font-black leading-6 lg:leading-10 md:text-left text-center">Become a Member of Our Facebook Family</h1>
                        </div>
                        <button role="button" aria-label="Join the community" className="mt-5 lg:mt-8 py-2 lg:py-4 px-6 bg-white font-bold text-indigo-700 rounded-lg text-md hover:bg-opacity-90 inline-flex items-center focus:ring-2
                                     focus:ring-offset-2 focus:ring-white focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-facebook me-2" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                            </svg>
                            Join the community</button>
                    </div>
                    <div className="md:w-1/3 w-2/3 flex align-middle justify-center">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/CTA.png" alt="cartoon avatars" className="h-48" />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default JoinUsFaceBook;
