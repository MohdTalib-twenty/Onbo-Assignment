const express=require("express")
const dotenv = require("dotenv")
const morgan = require("morgan")
const cors = require("cors");
const connectDb = require("./Config/Db");
const climateRoutes = require("./Routes/climateRoutes")


dotenv.config();
connectDb();

const app = express();

app.use(express.json());
app.use(morgan('dev'))
app.use(cors());

const PORT = process.env.PORT||8080;


app.use("/api/climate",climateRoutes)

app.listen(PORT,()=>{
    console.log("Server Connected")
})
