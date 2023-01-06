import { Card } from '../models/card.js';

function index(req, res){
  res.render('cards/index');
}

export{
  index
}