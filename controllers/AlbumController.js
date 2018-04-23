const Album = require('../models/album')

exports.changeAlbum = function(req, res) {
	// Adds Valication
	const name = req.body.field1;
	const artist_id = req.body.field2;
	const release_date = req.body.field3;
	req.checkBody('field1', 'name is required').notEmpty();
	req.checkBody('field2', 'description is required').notEmpty();
	req.checkBody('field3', 'Years Active is required').notEmpty();
	const errors = req.validationErrors();
	console.log(errors);
	// console.log("hi");
	if(errors) {
		res.render('index', { errors })
	} else {	
		console.log(artist_id);
		console.log(typeof(artist_id));
		const newAlbum = new Album({
			name,
			artist_id,
			release_date,
		});
		// Add unique name validation
		Album.createAlbum(newAlbum, function(err){
			if(err) {
				throw err;
				return
			}
			res.render('index', { message: 'Successfully Created Album' });
		});
		// console.log(newAlbum);
	}
}

// module.exports = "AlbumController"