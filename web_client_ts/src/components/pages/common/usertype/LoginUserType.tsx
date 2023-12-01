
import { useNavigate } from 'react-router-dom';
import './UserType.css';

const Devider = () => {
    const navigate=useNavigate();

    const routeTo=(link:string)=>{
        navigate(link)
    }
    return (
        <div id='userType'>
          
            <div className="mt-10 min-w-screen   flex items-center justify-center py-5">
    <div className="w-full    px-5 py-16 md:py-24 text-gray-800 font-light">
        <div className="w-full max-w-6xl mx-auto pb-5">
            <div className="-mx-3 md:flex items-center">
                <div className="px-3 md:w-2/3 mb-10 md:mb-0">
                    <h1 className="text-6xl md:text-8xl font-bold mb-5 leading-tight">Wellcome <br className="hidden md:block"/>Back !</h1>
                    <h3 className="text-gray-600 mb-7 leading-tight">Hire the best freelancers for any job, online.</h3>
                    <div>
                        <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                        <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                        <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                    </div>
                </div>
                <div className="px-3 md:w-1/3">
                    <form>
                        <div className="flex mb-3">
                        <button  onClick={()=>{routeTo('/recruiter/login')}} className="text-lg block flex gap-2 justify-center items-center w-full bg-red-400 hover:bg-red-700 focus:bg-indigo-700 transition-colors text-white rounded-lg px-3 py-2 font-semibold">
                        <img className='h-6 w-6 text-white' src="https://cdn-icons-png.flaticon.com/128/3137/3137864.png" alt="" />
      
                        Login as admin</button>

                        </div>
                        <div>
                            <button  onClick={()=>{routeTo('/users/signin')}} className="text-lg block w-full bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 transition-colors text-white rounded-lg px-3 py-2 font-semibold">
                                Login as User</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
            {/* <div className='container text-center p-2  min-h-screen center'>
                <h2 className='font-bold text-4xl my-4'>How do you want to use Starmark ?</h2>
                <div className='buttons mt-4 text-white'>
                    <button className='bg-indigo-700 p-5 rounded-lg' onClick={()=>{routeTo('/recruiter/jobs')}}>
                        <span>
                           Login as admin
                        </span>
                    </button>
                    <button className='bg-cyan-950 p-5 rounded-lg' onClick={()=>{routeTo('/users/signup')}}>
                        <span>
                            Login as user
                        </span>
                    </button>

                </div>
            </div> */}
        </div>
    )
}

export default Devider
