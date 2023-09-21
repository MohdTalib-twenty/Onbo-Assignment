const express= require("express");
const { getAllRecords, getAllRecordsOFArea,getCLimateRecordsofArea } = require("../Controllers/climateControllers");

const router = express.Router();


router.get("/getAll",getAllRecords)
router.post("/get-data-of-area",getAllRecordsOFArea)
router.post("/get-climate-of-area",getCLimateRecordsofArea)



module.exports=router;