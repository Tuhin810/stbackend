import "./abcd.css"
import ApplicantCard from '../../../shared/card/ApplicantCard'

function Show() {
  return (
    <div>
      <div className="mr-4  py-2 rounded-xl">
        <div className="m-2 space-y-2">
          <div
            className="group flex flex-col gap-2 rounded-lg bg-white shadow-xl
        p-5 text-white"
            tabIndex={1}
          >
            <div className="flex cursor-pointer items-center justify-between">
              <div className="flex items-center gap-2 ">

                <h4 className="font-medium text-xl text-gray-800 flex gap-2 items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chat-square-text" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                  </svg>Job Description</h4>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                className="h-5 w-5 transition-all text-black  duration-500 group-focus:-rotate-180" viewBox="0 0 16 16">
                <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
              </svg>
            </div>

            <div
              className=" invisible  text-gray-800 h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi

              <h4 className="font-medium mt-5  text-xl text-gray-800 my-1">Job Overview:</h4>
              <p className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>


              <h4 className="font-medium mt-5 text-xl text-gray-800 my-1">Job Requirement:</h4>
              <p className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
            </div>
          </div>

          <div
            className="group flex flex-col gap-2 rounded-lg bg-white shadow-xl
        p-5 text-white"
            tabIndex={2}
          >
            <div className="flex cursor-pointer items-center justify-between">
              <div className="flex items-center gap-2">

                <h4 className="font-medium text-xl text-gray-800 flex gap-2 items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-person-exclamation" viewBox="0 0 16 16">
                    <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm.256 7a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z" />
                    <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 1 0V11a.5.5 0 0 0-.5-.5Zm0 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" />
                  </svg>Applicant Details</h4>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                className="h-5 w-5 transition-all text-black  duration-500 group-focus:-rotate-180" viewBox="0 0 16 16">
                <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
              </svg>
            </div>
            <div
              className="card h-72 overflow-y-scroll invisible text-gray-800  max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000"
            >
              <div className="py-2 flex flex-col gap-6 px-3">
                <ApplicantCard />
                <ApplicantCard />
                <ApplicantCard />
                <ApplicantCard />
                <ApplicantCard />
                <ApplicantCard />
                <ApplicantCard />
                <ApplicantCard />
                <ApplicantCard />
                <ApplicantCard />

              </div>

            </div>
          </div>
        </div></div>

    </div>
  )
}

export default Show