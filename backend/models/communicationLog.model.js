import mongoose, { Schema, Types } from "mongoose";

const communicationLogchema = new Schema({
    campaignId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Campaign'
    },
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    },
    status: {
        type: String,
        enum: ['SENT', 'FAILED']
    },
}, { timestamps: true })

export const CommunicationLog = mongoose.model("CommunicationLog", communicationLogchema)