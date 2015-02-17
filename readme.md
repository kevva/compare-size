# compare-size [![Build Status](http://img.shields.io/travis/kevva/compare-size.svg?style=flat)](https://travis-ci.org/kevva/compare-size)

>  Compare size between two files

## Install

```sh
$ npm install --save compare-size
```

## Usage

```js
var compareSize = require('compare-size');

compareSize('foo.zip', 'bar.zip', function (err, res) {
	if (err) {
		throw err;
	}

	console.log(res);
	//=> {foo.zip: 439, bar.zip: 325, difference: 114}
});

compareSize.sync('foo.zip', 'bar.zip');
//=> {foo.zip: 439, bar.zip: 325, difference: 114}
```

## CLI

```sh
$ npm install --global compare-size
```

```sh
$ compare-size --help

Usage
  $ compare-size <file> <file>

Example
  $ compare-size foo.zip bar.tar.gz
```

## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
