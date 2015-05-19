# GPWeb

The easy way to build your own web site !

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.11.0.

## Requirements

NodeJS >= 0.10.0

## Installation


Clone the git project and run in the root of the project :

`npm install -g bower grunt-cli`

`npm install`

`bower install`

## Build & development

Run `grunt` for building and `grunt server` for preview.

For run the static presentation (no service) `grunt static`.

## Testing

Check the JavaScript syntax with : `grunt jshint`

Running `grunt test` will run the unit tests with karma.

## Translation

Extract all english text of the project :
`grunt nggettext_extract`
 
Then, in order to add a new or update a translation (".po" files), you need to run :
`grunt nggettext_compile`
