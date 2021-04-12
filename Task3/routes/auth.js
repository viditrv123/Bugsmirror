var express=require('express');
const { Router } = require('express');
var router=express.Router();
const {newRecord}=require("../controllers/auth");
const {allRecords}=require("../controllers/auth");
const {singleRecord}=require("../controllers/auth");
const {removeRecord}=require("../controllers/auth");
const {updateRecord}=require("../controllers/auth");

router.post("/newRecord",newRecord)
router.get("/allRecords",allRecords)
router.get("/singleRecords/:id",singleRecord)
router.delete("/removeRecord/:id",removeRecord)
router.delete("/updateRecord/:id",updateRecord)

module.exports=router;