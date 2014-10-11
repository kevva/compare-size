#!/usr/bin/env node
'use strict';

var compareSize = require('./');
var input = process.argv.slice(2);
var pkg = require('./package.json');
var prettyBytes = require('pretty-bytes');

/**
 * Help screen
 */

function help() {
	console.log([
		'',
		'  ' + pkg.description,
		'',
		'  Usage',
		'    compare-size <file> <file>',
		'',
		'  Example',
		'    compare-size foo.zip bar.tar.gz'
	].join('\n'));
}

/**
 * Show help
 */

if (input.indexOf('-h') !== -1 || input.indexOf('--help') !== -1) {
	help();
	return;
}

/**
 * Show package version
 */

if (input.indexOf('-v') !== -1 || input.indexOf('--version') !== -1) {
	console.log(pkg.version);
	return;
}

/**
 * Run
 */

compareSize(input[0], input[1], function (err, res) {
	if (err) {
		console.error(err);
		process.exit(1);
	}

	console.log([
		input[0] + ': ' + prettyBytes(res[input[0]]),
		input[1] + ': ' + prettyBytes(res[input[1]]),
		'Difference: ' + prettyBytes(res.difference)
	].join('\n'));
});
