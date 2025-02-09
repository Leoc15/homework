import express from 'express';
const router = express.Router();
import pool from '../pool.js'
import debugLib from 'debug';
const debug = debugLib('');

router.route('/')
  .get(async (req, res, next) => {
    try {
      const [results] = await pool.execute(
        'SELECT * FROM recipes'
      );

      res.send(results);

    } catch (err) {
      next(err);
    }
  })

router.route('/:id')
  .get(async (req, res, next) => {
    debug(`getting contact ${req.params.id}`);
    try {
      const [results] = await pool.execute(
        'SELECT *FROM recipes WHERE id = ?', [req.params.id]
      );

      if (!results.length) {
        return res.status(404)
          .send(`Unable to find contact ${req.params.id}`);
      }

      res.send(results[0]);
    } catch (err) {
      next(err);
    }


  }).delete(async (req, res, next) => {
    debug(`deleting contact ${req.params.id}`);
console.log('index.js delete code')
    try {
      const [results] = await pool.execute(
        'DELETE FROM recipes WHERE id = ?', [req.params.id]
      );

      console.log(results);
      if (!results.affectedRows) {
        return res.status(404)
          .send(`Unable to find contact ${req.params.id}`);
      }

      res.end();
    } catch (err) {
      next(err);
    }
  });
export default router;