import { Card } from '../models/card.js';

function index(req, res){
  Card.find({})
  .then(cards =>{
    res.render('cards/index',{
      cards : cards
    })
  })
  .catch(err =>{
    console.error(err);
    res.redirect('/');
  })
}

function newCard(req, res){
  res.render('cards/new');
}

function create(req, res){
  console.log(req.body);
  Card.create(req.body)
  .then(card =>{
    console.log(card);
    res.redirect('/cards');
  })
  .catch(err =>{
    console.error(err);
    res.redirect('/cards');
  })
}

function show(req, res){
  Card.findById(req.params.id)
  .then(card =>{
    res.render('cards/show',{
      card : card
    })
  })
  .catch(err =>{
    console.error(err);
    res.redirect('/cards');
  })
}

function delCard(req, res){
  Card.findByIdAndDelete(req.params.id)
  .then(card =>{
    res.redirect('/cards');
  })
  .catch(err =>{
    console.error(err);
    res.redirect('/cards');
  })
}

function edit(req, res){
  Card.findById(req.params.id)
  .then(card =>{
    res.render('cards/edit',{
      card: card
    })
  })
  .catch(err =>{
    console.error(err);
    res.redirect('/cards');
  })  
}

function update(req, res){
  console.log(req.body);
  Card.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(card =>{
    res.redirect(`/cards/${card._id}`);
  })
  .catch(err =>{
    console.error(err);
    res.redirect('/cards');
  })
}

export{
  index,
  newCard as new,
  create,
  show,
  delCard as delete,
  edit,
  update
}