/**
 * Running script automatically generates new bindings for the Bullet C API.
 * 
 * However, a small amount of preprocessing is required afterwards, if there 
 * are unimplements functions or things like that in the exported API.
 */
var path = require('path');
var fs = require('fs');
var jsb = require('js-beautify');
var generate = require('ffi-generate').generate;

// Automatically generate bullet bindings
var result = generate({
    filename: path.join(__dirname, '..', 'src', 'bullet', 'src', 'Bullet-C-Api.h'),
    library: path.join(__dirname, '..', 'build', 'Release', 'libbullet.so'),
    module: 'bullet'
});

// Report functions that could not be mapped
if (result.unmapped.length > 0) {
    console.log('----- UNMAPPED FUNCTIONS -----');
    console.log(result.unmapped);
    console.log('----- UNMAPPED FUNCTIONS -----');
}

// Write the bindings to file
fs.writeFileSync(path.join(__dirname, '..', 'lib', 'bulletphysics.js'), 
                 jsb.js_beautify(result.serialized));
