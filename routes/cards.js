import { Router } from 'express'
import * as cardsCtrl from '../controllers/cards.js';

const router = Router()

/* GET users listing. */
router.get('/', cardsCtrl.index);

// POST localhost:3000/cards/
router.post('/', cardsCtrl.create);

// GET /cards/:id
router.get('/:id', cardsCtrl.show);

// GET localhost:3000/cards/new
router.get('/new', cardsCtrl.new);


export {
  router
}
