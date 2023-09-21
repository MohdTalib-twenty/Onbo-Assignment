const CLimate = require("../Models/climateModels");

const getAllRecords = async (req, res) => {
  try {
    const data = await CLimate.find({});
    if (data) {
      res.status(200).send({
        success: true,
        data,
      });
    } else {
      res.status(400).send({
        success: false,
        message: "Something went wrong",
      });
    }
  } catch (error) {
    res.status(400).send({
      success: false,
      message: error,
    });
  }
};

const getAllRecordsOFArea = async (req, res) => {
  try {
    const { area_code } = req.body;
    if (!area_code) {
      res.status(400).send({
        success: false,
        message: "Please Input Area Code",
      });
    } else {
      const data = await CLimate.findOne({ area_code });
      if (data) {
        res.status(200).send({
          success: true,
          data,
        });
      } else {
        res.status(400).send({
          success: false,
          message: "Area Code Doesn't Exists",
        });
      }
    }
  } catch (error) {
    res.status(400).send({
      success: false,
      message: error,
    });
  }
};

const getCLimateRecordsofArea=async(req,res)=>{
    try {
        const { area_code } = req.body;
        if (!area_code) {
          res.status(400).send({
            success: false,
            message: "Please Input Area Code",
          });
        } else {
          const data = await CLimate.findOne({ area_code });
          if (data) {
            res.status(200).send({
              success: true,
              climate : data.climate,
            });
          } else {
            res.status(400).send({
              success: false,
              message: "Area Code Doesn't Exists",
            });
          }
        }
      } catch (error) {
        res.status(400).send({
          success: false,
          message: error,
        });
      }
}

module.exports = { getAllRecords,getAllRecordsOFArea,getCLimateRecordsofArea };
