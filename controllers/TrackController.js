const Track = require('../models/track')

exports.changeTrack= function(req, res) {
	// Adds Valication
	const name = req.body.field1;
	// const album_id = req.body.field2;
	const play_time = req.body.field3;
	req.checkBody('field1', 'name is required').notEmpty();
	req.checkBody('field2', 'description is required').notEmpty();
	req.checkBody('field3', 'Years Active is required').notEmpty();
	req.checkBody('field3', 'Not a number').isInt();
	const errors = req.validationErrors();
	console.log(errors);
	if(errors) {
		res.render('index', { errors })
	} else {		
		const newTrack = new Track({
			name,
			// album_id,
			play_time,
		});
		// Add unique name validation
		Track.createTrack(newTrack,function(err){
			if(err){
				throw err;
				return
			}
			res.render('index', { message: 'Successfully Created Track' });
		});
		// console.log(newTrack);
	}
}

// module.exports = "AlbumController"