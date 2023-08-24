import { NotiCardProps } from "../../../../@types/interfaces/props/NotificationCardProps"

export default function notiCard({title, company}:NotiCardProps){
	return (
		<>
			<div className="w-[100%] bg-white px-3 py-1 rounded-md shadow-md mb-4 mx-auto flex items-center justify-between">
				<div className="w-8/12  pr-2">
					<div className="noti-card-title text-black text-xl sm:text-2xl font-medium leading-6 ">
						{title} 
					</div>
					<div className="noti-card-descip text-sm sm:text-lg">
						{company}
					</div>
				</div>
				{/*button class*/}
				<div className="flex flex-col sm:flex-row justify-end w-4/12">
          <button className="shrink-0 focus:outline-none sm:mr-3 hover:bg-green-600 transition duration-150 ease-in-out rounded-lg bg-white hover:text-white text-green-600 px-4 py-1 my-2 text-sm sm:text-md border-2 border-green-600">
              Accept
          </button>
          <button className=" shrink-0 focus:outline-none transition duration-150 ease-in-out hover:bg-red-600 hover:text-white border bg-white rounded-lg text-red-600 px-4 py-1  my-2 text-sm sm:text-md border-2 border-red-600">
            Decline
          </button>
      	</div>
			</div>
		</>
		)
}