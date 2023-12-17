
import mongoose, { Schema } from "mongoose";

interface SubscriptionHistory {
	recruiterId: mongoose.Types.ObjectId;
	planName: string;
	planPrice: number;
}

const subscriptionHistorySchema: Schema<SubscriptionHistory> = new mongoose.Schema({
	recruiterId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Recruiters",
		required: true,
	},
	planName: {
		type: String,
		required: true,
	},
	planPrice: {
		type: Number,
		required: true,
	},
});

const SubscriptionHistoryModel = mongoose.model<SubscriptionHistory>("SubscriptionHistory", subscriptionHistorySchema);

export default SubscriptionHistoryModel;
