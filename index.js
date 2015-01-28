'use strict';

var fs = require('fs');

module.exports = function (a, b, cb) {
	var ret = {};

	fs.lstat(a, function (err, stats) {
		if (err) {
			cb(err);
			return;
		}

		ret[a] = stats.size;

		fs.lstat(b, function (err, stats) {
			if (err) {
				cb(err);
				return;
			}

			ret[b] = stats.size;
			ret.difference = Math.abs(ret[a] - ret[b]);

			cb(null, ret);
		});
	});
};

module.exports.sync = function (a, b) {
	var ret = {};

	ret[a] = fs.lstatSync(a).size;
	ret[b] = fs.lstatSync(b).size;
	ret.difference = Math.abs(ret[a] - ret[b]);

	return ret;
};
