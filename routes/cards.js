import { Router } from 'express'
import * as cardsCtrl from '../controllers/cards.js';

const router = Router()

/* GET users listing. */
router.get('/', cardsCtrl.index)

export {
  router
}
