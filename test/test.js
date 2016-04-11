import path from 'path';
import test from 'ava';
import fn from '../';

const a = path.join(__dirname, 'fixtures', 'test-a.txt');
const b = path.join(__dirname, 'fixtures', 'test-b.txt');

test('compare size between two files', async t => {
	const data = await fn(a, b);

	t.is(data[a], 9);
	t.is(data[b], 7);
	t.is(data.difference, 2);
});

test('synchronously compare size between two files', t => {
	const data = fn.sync(a, b);

	t.is(data[a], 9);
	t.is(data[b], 7);
	t.is(data.difference, 2);
});
