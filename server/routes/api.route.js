const CONSTANTS = require("../constants");
const todo = require("../controllers/todo.controller");
const verify = require("../middlewares/verifyToken.middleware");

const router = require("express").Router();

router.get(CONSTANTS.ENDPOINT.TODOID, verify, todo.get);
router.post(CONSTANTS.ENDPOINT.TODO, verify, todo.post);
router.put(CONSTANTS.ENDPOINT.TODO, verify, todo.update);

module.exports = router;
