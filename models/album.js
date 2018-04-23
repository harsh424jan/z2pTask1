var mongoose = require('mongoose');
// Album Schema
var AlbumSchema = mongoose.Schema({
	artist_id: {
		type: mongoose.Schema.Types.ObjectId,
	},
	name: {
		type: String,
	},
	release_date: {
		type: String,
	},
});

var Album = module.exports = mongoose.model('Album', AlbumSchema);

module.exports.createAlbum = function (data, cb) {
	console.log(data);
    data.save(data, cb);
}


