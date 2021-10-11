//llamo el modulo express en una constante
const express = require("express");
const hnfeedSchema = require('../models/hnfeed');

// creo un enrutador
const router = express.Router();

//definir rutas
router.post("/hnfeed", (req, res) => {
    const hnfeed = hnfeedSchema(req.body);
    hnfeed
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// get all hnfeed
router.get("/hnfeed", (req, res) => {
    hnfeedSchema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

// get a hnfeed
router.get("/hnfeed/:id", (req, res) => {
    const { id } = req.params;
    hnfeedSchema
      .findById(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

// delete a hnfeed
router.delete("/hnfeed/:id", (req, res) => {
    const { id } = req.params;
    hnfeedSchema
      .remove({ _id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

// update a hnfeed
router.put("/hnfeed/:id", (req, res) => {
    const { id } = req.params;
    const { name, age, email } = req.body;
    hnfeedSchema
      .updateOne({ _id: id }, { $set: { name, age, email } })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

module.exports = router;