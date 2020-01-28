const router = require("express").Router();

const db = require("../models");

router.get("/all", function(req, res) {
  db.notes.find({}, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.json(data);
    }
  });
});

module.exports = router;