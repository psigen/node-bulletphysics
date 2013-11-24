var exec = require('child_process').exec;
var path = require('path');
var fs = require('fs');
var jsb = require('beautifyjs');
var generate = require('lib/generateffi').generate;

exec('llvm-config --includedir', function (fail, out, err) {
    var includedir = out.replace(/\s+$/, '');
    var result = exports.generate({
        filename: path.join(includedir, 'clang-c', 'Index.h'),
        library: 'libclang',
        prefix: 'clang_', 
        includes: [includedir],
    });

    if (result.unmapped.length > 0) {
        console.log('----- UNMAPPED FUNCTIONS -----');
        console.log(result.unmapped);
        console.log('----- UNMAPPED FUNCTIONS -----');
    }

    fs.writeFileSync(path.join(__dirname, 'dynamic_clang.js'), jsb.js_beautify(result.serialized));
    var dynamic_clang = require(path.join(__dirname, 'dynamic_clang'));
    var ver = dynamic_clang.libclang.clang_getClangVersion();
    console.log(dynamic_clang.libclang.clang_getCString(ver));
    dynamic_clang.libclang.clang_disposeString(ver)
});