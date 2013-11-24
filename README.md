node-bullet
===========

Node.js bindings to Bullet Physics through node-ffi.

These bindings are automatically generated via [ffi-generate](https://github.com/tjfontaine/node-ffi-generate) from the Bullet C-API header file (`Bullet-C-Api.h`).  Thus, they have a 1:1 mapping with the existing API documentation.

  * [Documentation for the Bullet C API](http://bulletphysics.org/Bullet/BulletFull/Bullet-C-Api_8h.html)

Using this library
==================
Currently, this library is not published to `npm`.  However, you can use it in npm projects by adding it to your `package.json` using a git url:

  "dependencies": { 
    "bulletphysics": "git://github.com/psigen/node-bulletphysics.git"
  }
