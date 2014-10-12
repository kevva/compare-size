'use strict';

var compare = require('../');
var path = require('path');
var test = require('ava');

test('compare size between two files', function (t) {
	t.plan(4);

	var a = path.join(__dirname, 'fixtures', 'test-a.txt');
	var b = path.join(__dirname, 'fixtures', 'test-b.txt');

	compare(a, b, function (err, res) {
		t.assert(!err, err);
		t.assert(res[a] === 9);
		t.assert(res[b] === 7);
		t.assert(res.difference === 2);
	});
});

test('synchronously compare size between two files', function (t) {
	t.plan(3);

	var a = path.join(__dirname, 'fixtures', 'test-a.txt');
	var b = path.join(__dirname, 'fixtures', 'test-b.txt');
	var res = compare.sync(a, b);

	t.assert(res[a] === 9);
	t.assert(res[b] === 7);
	t.assert(res.difference === 2);
});
