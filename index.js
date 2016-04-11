'use strict';
const fs = require('fs');
const pify = require('pify');
const lstat = pify(fs.lstat, Promise);

module.exports = (a, b) => {
	const ret = {};

	return lstat(a)
		.then(stats => {
			ret[a] = stats.size;
			return lstat(b);
		})
		.then(stats => {
			ret[b] = stats.size;
			ret.difference = Math.abs(ret[a] - ret[b]);
			return ret;
		});
};

module.exports.sync = function (a, b) {
	const ret = {};

	ret[a] = fs.lstatSync(a).size;
	ret[b] = fs.lstatSync(b).size;
	ret.difference = Math.abs(ret[a] - ret[b]);

	return ret;
};
