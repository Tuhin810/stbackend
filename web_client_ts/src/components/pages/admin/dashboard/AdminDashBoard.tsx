import { Outlet } from "react-router-dom"
import Navbar from "../navbar/Navbar"

const AdminDashBoard = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <Outlet />
            </div>
        </div>
    )
}

export default AdminDashBoard