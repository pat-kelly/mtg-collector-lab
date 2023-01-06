import { Card } from '../models/card.js';

function index(req, res){
  res.render('cards/index');
}

function newCard(req, res){
  res.render('cards/new');
}

function create(req, res){
  console.log(req.body);
}

export{
  index,
  newCard as new,
  create
}