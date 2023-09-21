const mongoose=require("mongoose")
const connectDb=require("./Config/Db")
const Data= require("./Config/Data")
const Climate = require('./Models/climateModels')
const dotenv=require("dotenv")


dotenv.config()
connectDb();

const importData=async()=>{
    try {
        await Climate.deleteMany();
        await Climate.insertMany(Data);
        console.log("Data imported");
        process.exit()

    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
const DestroyData=()=>{

}

if(process.argv[2]==='d'){
    DestroyData();
}else{
    importData();
}