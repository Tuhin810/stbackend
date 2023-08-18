

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/pages/home/Home";
import NavBar from "./components/shared/navbar/NavBar";
import Login from "./components/pages/auth/Login";

import UserDevider from "./components/pages/auth/UserDevider";
import Signup from "./components/pages/auth/Signup";


const router = createBrowserRouter([
  {
    path: "/",
    element:<> <Home/>
    </> ,
  },
  {
    path: "/signup",
    element:<> <UserDevider/>
    </> ,
  },
  {
    path: "/signup/user",
    element:<> <Signup/>
    </> ,
  },
  {
    path: "/signin",
    element:<> <Login/>
    </> ,
  },
  
]);


function App() {


  return (
    <>
 <RouterProvider
      router={router}
  
    />
    </>
  )
}

export default App
