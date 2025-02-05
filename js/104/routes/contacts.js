import express from 'express';
const router = express.Router();
import pool from '../pool.js';
import debugLib from 'debug';
const debug = debugLib('contacts:api');

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
      const [results] = await pool.execute(
        'SELECT * FROM people'
      );

      res.send(results);

    } catch (err) {
      next(err);
    }
});

router.get('/:id', async (req, res, next) => {
  try {
     const [results] = await /*global.connection.*/pool.execute(
           'SELECT * FROM people WHERE id = ?', [req.params.id]
         );
     
         if (!results.length) {
           return next(new Error(`Contact ${req.params.id} not found`));
         }


      res.send(results[0]);

    } catch (err) {
      next(err);
    }
});
export default router;
