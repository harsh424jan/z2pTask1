var mongoose = require('mongoose');

// Artist Schema
var ArtistSchema = mongoose.Schema({
	name: {
		type: String,
	},
	description: {
		type: String,
	},
	years_active: {
		type: String,
	},
});

var Artist = module.exports = mongoose.model('Artist', ArtistSchema);

module.exports.createArtist = function (data, cb) {
	console.log(data);
    data.save(data, cb);
}
// }
// module.exports.Query = function (run){
// 	Artist.find(run);
// }

