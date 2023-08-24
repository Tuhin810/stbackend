
import { useNavigate } from 'react-router-dom';
import './UserType.css';

const Devider = () => {
    const navigate=useNavigate();

    const routeTo=(link:string)=>{
        navigate(link)
    }
    return (
        <div id='userType'>
            <div className='container text-center p-2  min-h-screen center'>
                <h2 className='font-bold text-4xl my-4'>How do you want to use Starmark ?</h2>
                <div className='buttons mt-4 text-white'>
                    <button className='bg-cyan-500 p-5 rounded-lg' onClick={()=>{routeTo('/recruiter/login')}}>
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
            </div>
        </div>
    )
}

export default Devider
