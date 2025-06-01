import mongoose,{Schema, Types} from "mongoose";

const customerSchema=new Schema({
  name:{
    type:String,
    required:true,
    unique:true,
    index:true,
    lowercase:true,
    trim:true,
  },
  email:{
    type:String, 
    required:true,
    unique:true,
    lowercase:true,
    trim:true,
  },
  age:{
    type:Number,
    required:true,
    unique:true,
  },
  city:{
    type:String, 
    required:true,
  },
  totalSpent:{
     type:Number,
  },
  lastPurchaseDate:{
    type:Date,
   },
  visits:{
    type:Number,
   }

},{timestamps:true})



export const Customer=mongoose.model('Customer',customerSchema)