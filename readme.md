# compare-size [![Build Status](http://img.shields.io/travis/kevva/compare-size.svg?style=flat)](https://travis-ci.org/kevva/compare-size)

> Compare size between two files


## Install

```
$ npm install --save compare-size
```


## Usage

```js
const compareSize = require('compare-size');

compareSize('foo.zip', 'bar.zip').then(data => {
	console.log(data);
	//=> {foo.zip: 439, bar.zip: 325, difference: 114}
});

compareSize.sync('foo.zip', 'bar.zip');
//=> {foo.zip: 439, bar.zip: 325, difference: 114}
```


## API

### compareSize(a, b)

Compares size between two files. Returns a promise for an object with the stats difference.

#### a

Type: `string`

Path to the first file.

#### b

Type: `string`

Path to the second file.


## CLI

```
$ npm install --global compare-size
```

```
$ compare-size --help

  Usage
    $ compare-size <file> <file>

  Example
    $ compare-size foo.zip bar.tar.gz
```


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
