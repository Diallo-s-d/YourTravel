const models = require("../models");

const browse = (req, res) => {
  models.announce
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.announce
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// SELECTALL
const select = (req, res) => {
  const { model } = req.params;
  models.announce.selectAll(model).then(([rows]) => {
    if (rows[0] == null) {
      res.sendStatus(404);
    } else {
      res.send(rows);
    }
  });
};

// SEARCH FOR TRAVEL DETAILS
const getTravelDetails = (req, res) => {
  const { id } = req.params;
  models.announce.getTravelDetailsAll(id).then(([rows]) => {
    if (rows[0] == null) {
      res.sendStatus(404);
    } else {
      res.send(rows);
    }
  });
};

module.exports = {
  browse,
  read,
  select,
  getTravelDetails,
};
