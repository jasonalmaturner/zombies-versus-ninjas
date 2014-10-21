'use strict';

var express = require('express'),
	app = express(),
	mongo = require('mongo'),
	mongoose = require('mongoose'),
	Ninja = require('./ninja'),
	Zombie = require('./zombie');

var jimmy = new Zombie({name: 'Rotting jimmy', health: 30, ninjasConsumed: 1});
console.log(jimmy);
jimmy.save(jimmy);

var donatello = new Ninja({name: 'Donatello', health: 200, weapons: 'Bo staff'});
console.log(donatello);
donatello.save(donatello);


app.get('/zombies', function (req, res) {
	Zombie.find().exec(function(err, zombies){
		res.send(zombies);
	});
});

app.get('/ninjas', function (req, res){
	Ninja.find().exec(function(err, ninjas){
		if(err){
			res.send(err);
		} else {
			res.send(ninjas);
		}
	});
})

app.get('/zombies/:name', function (req, res) {
	Zombie.find({name: req.params.name}).exec(function(err, zombies){
		res.send(zombies);
	});
})

app.get('/ninjas/:name', function (req, res) {
	Ninja.find({name: req.params.name}).exec(function(err, ninjas){
		console.log(ninjas);
		if(err) throw err;		
		res.send(ninjas);
	});
})

mongoose.connect('mongodb://localhost/ninjaZombies');

app.listen(9007);