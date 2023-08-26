import { Outlet } from 'react-router-dom'
import Dashboard_Navbar from '../DashBoard_Navbar/Dashboard_Navbar'
import { SideBar } from '../Dashboard_Sidebar/SideBar'
const Dashboard = () => {
  return (
    <div id='job-post'>
    <body  className="flex bg-gray-100 min-h-screen ">
    
    <SideBar/>


 <div  className="flex-grow text-gray-800 ml-16">
   <Dashboard_Navbar/>
    <main  className="p-6 sm:p-10 space-y-6">
    <div>

<Outlet/>
</div>
    </main>
    </div>
</body>
    </div>
 
  )
}

export default Dashboard