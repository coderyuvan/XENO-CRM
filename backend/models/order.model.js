import mongoose, { Schema, Types } from "mongoose";

const orderSchema = new Schema({

    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
    },
    amount:{
        type:Number,
        required:true
    },
    date:{
        type:Date
    }

}, { timestamps: true })

export const Order=mongoose.model("Order",orderSchema)