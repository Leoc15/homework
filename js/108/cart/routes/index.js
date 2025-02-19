var express = require('express');
var router = express.Router();
var pool = require('../pool.js')


/* GET home page. */
router.get('/', async (req, res, next) =>{
  try {
    const [items] = await pool.execute(
      'SELECT * FROM animals'
    );

    res.render('layout', {
      title: 'Take home a pet today!',
      items,
      partials: {
        content: 'index'
      }
    });

  } catch (err) {
    next(err);
  }

});
router.post('/', async (req, res, next) =>{
  console.log(req.body.Qty)
  try {
    const [items] = await pool.execute(
      'UPDATE animals SET Qty=?', [+req.body.Qty]
    );
    if (!items.affectedRows) {
     console.log(items);
    }

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
