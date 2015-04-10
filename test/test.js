'use strict';

var path = require('path');
var test = require('ava');
var compareSize = require('../');

test('compare size between two files', function (t) {
	t.plan(4);

	var a = path.join(__dirname, 'fixtures', 'test-a.txt');
	var b = path.join(__dirname, 'fixtures', 'test-b.txt');

	compareSize(a, b, function (err, res) {
		t.assert(!err, err);
		t.assert(res[a] === 9, res[a]);
		t.assert(res[b] === 7, res[b]);
		t.assert(res.difference === 2, res.difference);
	});
});

test('synchronously compare size between two files', function (t) {
	t.plan(3);

	var a = path.join(__dirname, 'fixtures', 'test-a.txt');
	var b = path.join(__dirname, 'fixtures', 'test-b.txt');
	var res = compareSize.sync(a, b);

	t.assert(res[a] === 9, res[a]);
	t.assert(res[b] === 7, res[b]);
	t.assert(res.difference === 2, res.difference);
});
