import express from "express";
import { getAllRecruiters } from "../../controller/admin/getAllRecruiter";
import { deleteRecruiter } from "../../controller/admin/deleteRecruiter";

const router = express.Router();

router.route("/getAllRecruiter").get(getAllRecruiters);
router.route("/removerecruiter").delete(deleteRecruiter);

module.exports = router