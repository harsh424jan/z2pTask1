const express = require('express');
const router = express.Router();
const Artist = require('../models/artist');
const Album = require('../models/album');
const Track = require('../models/track');
const AlbumController = require('../controllers/AlbumController')
const ArtistController = require('../controllers/ArtistController')
const TrackController = require('../controllers/TrackController')

router.post('/', function(req, res) {
	const { collection } = req.body
	console.log(collection);
	switch(collection){
		case 'artist':
			ArtistController.changeArtist(req, res);
			break;
		case 'albums':
			AlbumController.changeAlbum(req, res);
			break;
		case 'tracks':
			TrackController.changeTrack(req, res);
			break;
		default:
			res.render('index', { errors: {} });
			break;
	}
  res.render('index', { errors: {} });
});

router.get('/',function(req,res){
	res.render('index', {errors: {} });
});

router.all('/playlist', function(req,res) {
	res.render('playlist');
});

router.all('/artist', function(req,res) {
	Artist.find({},{_id: 0, __v: 0},function(err,response) {
		if(err) throw err;
		res.json(response);
	});
});
router.post('/album', function(req,res) {
	Album.find({},{_id: 0, __v: 0},function(err,response) {
		if(err) throw err;
		res.json(response);
	});

});
router.post('/track', function(req,res) {
	Track.find({},{_id: 0, __v: 0},function(err,response) {
		if(err) throw err;
		res.json(response);
	});
});
router.get('/artistname',function(req,res) {
	Artist.find({},{_id:0, name: 1},function(err,response,){
		if(err) throw err;
		res.json(response);
	});
});
router.get('/albumname',function(req,res) {
	Album.find({},{_id:0, name: 1},function(err,response,){
		if(err) throw err;
		res.json(response);
	});
});
router.get('/artistid',function(req,res) {
	console.log(req.url);
	Artist.find({},{ _id:1, name: 1},function(err,response,){
		if(err) throw err;
		res.json(response);
	});
});
router.get('/albumid',function(req,res) {
	// console.log(req.url);
	Album.find({},{_id:1, name: 1},function(err,response,){
		if(err) throw err;
		res.json(response);
	});
});
router.get('/trackname',function(req,res) {
	// console.log(req.url);
	Track.find({},{_id:0, name: 1},function(err,response,){
		if(err) throw err;
		res.json(response);
	});
});
module.exports = router;
