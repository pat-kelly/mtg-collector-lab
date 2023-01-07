import { Router } from 'express'
import * as cardsCtrl from '../controllers/cards.js';

const router = Router()

/* GET users listing. */
router.get('/', cardsCtrl.index);

// POST localhost:3000/cards/
router.post('/', cardsCtrl.create);

// GET localhost:3000/cards/new
router.get('/new', cardsCtrl.new);

// GET /cards/:id
router.get('/:id', cardsCtrl.show);

//DELETE cards/:id/
router.delete('/:id', cardsCtrl.delete);


export {
  router
}
