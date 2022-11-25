const sqlite3 = require('sqlite3').verbose();
var express = require('express');
var router = express.Router();


/* GET CHARACTER BY ID */
router.get('/:id', function(req, res, next) {
  var id = [req.params.id]
  let db = new sqlite3.Database('./characters.db');
  db.get(`SELECT * FROM characters WHERE id = ?`, id,  (err, rows) => {
    if (err) {
      res.status(400).json({"error":err.message});
      return;
    }
    console.log(rows)
    res.status(200).json(rows);
  });
});

/* GET ALL CHARCTERS */
router.get('/', function(req, res, next) {
  let db = new sqlite3.Database('./characters.db');
  db.all(`SELECT * FROM characters`, (err, rows) => {
    if (err) {
      res.status(400).json({"error":err.message});
      return;
    }
    console.log(rows)
    res.status(200).json(rows);
  });
});

module.exports = router;
