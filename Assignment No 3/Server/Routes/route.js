const express = require('express');
const router = express.Router();
const {newuser, getalluser, createcourse, getallcourse, createsection, getallsections, createdept, getalldept} = require('../Controllers/logic')


router.route("/createuser").post(newuser);
router.route("/getalluser/:id").get(getalluser)


router.route("/createcourse").post(createcourse);
router.route("/getallcourse").get(getallcourse);

router.route("/createsection").post(createsection)
router.route("/getallsections").get(getallsections)


router.route("/createdept").post(createdept)
router.route("/getalldept").get(getalldept)
module.exports = router;