import mongoose,{Schema, Types} from "mongoose";

const segmentSchema=new Schema({
   name:{
    type:String,
    required:true,
    unique:true
  },
  rules:{
    type:Array,
    required:true
  },
  audienceSize: {
    type:Number,
    required:true
  },
},{timestamps:true})

export const Segment=mongoose.model("Segment",segmentSchema)