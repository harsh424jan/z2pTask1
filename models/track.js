var mongoose = require('mongoose');

var TrackSchema = mongoose.Schema({
	album_id: {
		type: mongoose.Schema.Types.ObjectId,
	},
	name: {
		type: String,
	},
	play_time: {
		type: Number,
	},
});

var Track = module.exports = mongoose.model('Track', TrackSchema);

module.exports.createTrack = function (data, cb) {
	console.log(data);
    data.save(data, cb);
}

