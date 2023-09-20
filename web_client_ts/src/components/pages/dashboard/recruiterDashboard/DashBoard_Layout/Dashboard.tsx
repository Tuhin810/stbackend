import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div id='job-post'>

      <main className="p-6 sm:p-10 space-y-6">
        <div>
          <Outlet />
        </div>
      </main>

    </div>

  )
}

export default Dashboard