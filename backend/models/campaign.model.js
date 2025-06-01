import mongoose, { Schema, Types } from "mongoose";

const campaignSchema = new Schema({

    segmentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Segment'
    },
    message:{
        type:String,
        required:true,
    }

}, { timestamps: true })

export const Campaign = mongoose.model("Campaign", campaignSchema)