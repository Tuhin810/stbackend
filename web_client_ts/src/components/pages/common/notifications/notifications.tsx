import NotiCard from './notificationCard';
const cardInfo= [
		{
			id: 1,
			title: "Sr. Software Developer",
			company: "XYZ Company"
		},
		{
			id:2,
			title: "Android Developer",
			company: "AB"
		}
	]

export default function Notification(){

	return (
			<>
				<div className="noti-container m-4 sm:mx-20">
					<div className="text-3xl font-medium sm:font-semibold notification-title mb-4 sm:mb-6">
						Notifications
					</div>
					{/*Notifcation card section*/}
					<NotiCard key={cardInfo[0].id} title={cardInfo[0].title} company={cardInfo[0].company}/>
					<NotiCard key={cardInfo[1].id} title={cardInfo[1].title} company={cardInfo[1].company}/>
				</div>
			</>
		)
}