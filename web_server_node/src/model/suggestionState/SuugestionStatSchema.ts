import mongoose, { Schema } from "mongoose";
import { StateSuggestion } from "../../@types/interfaces/StateSuggestion";

// model for new registration 

const stateSchema: Schema<StateSuggestion> = new mongoose.Schema({
    state:{
        type:String,
        required:[true,"state can not be blank"]
    },
    country:{
        type:String,
        required:[true,"country can not be blank"]
    }
});

const StateSuggestionModel = mongoose.model<StateSuggestion>("StateSuggestion", stateSchema);

export default StateSuggestionModel;