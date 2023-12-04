import mongoose from "mongoose"

export interface IEmployerSubscriptionDetails {
	_id: string
	employer_object_id: mongoose.Schema.Types.ObjectId
	payment_id: mongoose.Schema.Types.ObjectId
	plan_object_id: mongoose.Schema.Types.ObjectId
	payment_time: number
}