const Artist = require('../models/artist')

exports.changeArtist = function(req, res) {
	// Adds Valication
	const name = req.body.field1;
	const description = req.body.field2;
	const years_active = req.body.field3;
	req.checkBody('field1', 'name is required').notEmpty();
	req.checkBody('field2', 'description is required').notEmpty();
	req.checkBody('field3', 'Years Active is required').notEmpty();
	const errors = req.validationErrors();
	console.log(errors);
	if(errors) {
		res.render('index', { errors: errors });
	} else {		
		const newArtist = new Artist({
			name,
			description,
			years_active,
		});
		// Add unique name validation
		Artist.createArtist(newArtist, (err) => {
			if(err){
				throw err;
				return;
			}
			res.render('index', { message: "Successfully Created Artist" });
		})
		// console.log(newArtist);
	}
}

// module.exports = "AlbumController"