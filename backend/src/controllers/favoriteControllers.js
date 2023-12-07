const models = require("../models");

const browse = (req, res) => {
  // eslint-disable-next-line prefer-destructuring
  const userId = req.params.userId;
  models.favorite
    .findAll({ where: { user_id: userId } })
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.favorite
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

const addFavorite = (req, res) => {
  const favorite = req.body;
  models.favorite
    .insert(favorite)
    .then(([result]) => {
      console.info(result);
      res.status(200).json({ message: "Annonce bien ajoutée à tes favoris" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        error: err.errno,
      });
    });
};

const destroy = (req, res) => {
  models.favorite
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
  addFavorite,
  destroy,
};
