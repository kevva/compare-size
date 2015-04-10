#!/usr/bin/env node
'use strict';

var meow = require('meow');
var prettyBytes = require('pretty-bytes');
var compareSize = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ compare-size <file> <file>',
		'',
		'Example',
		'  $ compare-size foo.zip bar.tar.gz'
	].join('\n')
});

if (cli.input.length < 2) {
	console.error([
		'Provide two files to compare',
		'',
		'Example',
		'  $ compare-size foo.zip bar.tar.gz'
	].join('\n'));

	process.exit(1);
}

compareSize(cli.input[0], cli.input[1], function (err, res) {
	if (err) {
		console.error(err.message);
		process.exit(1);
	}

	console.log([
		cli.input[0] + ': ' + prettyBytes(res[cli.input[0]]),
		cli.input[1] + ': ' + prettyBytes(res[cli.input[1]]),
		'Difference: ' + prettyBytes(res.difference)
	].join('\n'));
});
