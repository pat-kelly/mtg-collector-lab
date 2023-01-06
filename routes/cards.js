import { Router } from 'express'
import * as cardsCtrl from '../controllers/cards.js';

const router = Router()

/* GET users listing. */
router.get('/', cardsCtrl.index);

// GET localhost:3000/cards/new
router.get('/new', cardsCtrl.new);

export {
  router
}
