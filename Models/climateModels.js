const mongoose =require("mongoose")

const climateSchema=new mongoose.Schema({
    climate:{
        type:String,
        required:true
    },
    area_code:{
        type : Number,
        required:true
    },
    temperature:{
        type:Number,
        required:true
    },
    humidity:{
        type:Number,
        required:true
    },
    chances_of_rain:{
        type:Number,
        required:true
    }
},{timestamps:true});


module.exports= new mongoose.model("climate",climateSchema)