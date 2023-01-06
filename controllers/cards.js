import { Card } from '../models/card.js';

function index(req, res){
  res.render('cards/index');
}

function newCard(req, res){
  res.render('cards/new');
}

export{
  index,
  newCard as new
}