const CONSTANTS = require("../constants");
const auth = require("../controllers/auth.controller");

const router = require("express").Router();

router.get("/", auth.get);
router.post(CONSTANTS.ENDPOINT.LOGIN, auth.login);
router.post(CONSTANTS.ENDPOINT.SIGNUP, auth.signup);

module.exports = router;
