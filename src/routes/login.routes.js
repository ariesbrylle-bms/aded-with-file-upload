var router = require("express").Router();

const loginControlller = require("../controllers/login.controller");

router.post("/", loginControlller.login);

module.exports = router;
