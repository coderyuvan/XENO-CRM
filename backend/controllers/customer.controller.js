import mongoose from "mongoose"
import {asyncHandler} from "../utils/asyncHandler.js"
import {apiError} from "../utils/apiError.js"
import {apiResponse} from "../utils/apiResponse.js"
import { Customer } from "../models/customer.model.js"

const addCustomer=asyncHandler(async(req,res)=>{
    console.log(req.body)
    const {name,email,age,city,totalSpent,lastPurchaseDate,visits}=req.body;

    if(!name || !email || !age || !city) {
        throw new apiError(400,"All fields Are Required")
    }

   const existingCustomer= await Customer.findOne({
        $or:[{name},{email}]
    })

    if(existingCustomer){
        throw new apiError(409,"Customer already exists")
    }

   const newCustomer= await Customer.create({
        name,
        email,
        age,
        city,
        totalSpent,
       visits: visits || 0, 
       lastPurchaseDate: lastPurchaseDate || new Date(),
    })
    
    return res.status(201).json(
        new apiResponse(201,newCustomer,"Customer added Succesfully")
    )
})

const getAllCustomer = asyncHandler(async (req, res) => {
    const allCustomers = await Customer.find().lean();

    if (!allCustomers || allCustomers.length === 0) {
        throw new apiError(404, {}, "No customers found");
    }

    return res.status(200).json(
        new apiResponse(200, allCustomers, "Customers fetched successfully")
    );
});

export {addCustomer,getAllCustomer}