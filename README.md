node-bullet
===========

Node.js bindings to Bullet Physics through [node-ffi].

These bindings are automatically generated via [node-ffi-generate] from the Bullet C API header file (`Bullet-C-Api.h`).  They have a 1:1 mapping with the existing Bullet C API documentation.

  * [Documentation for the Bullet C API](http://bulletphysics.org/Bullet/BulletFull/Bullet-C-Api_8h.html)

Installing this library via NPM
===============================
Currently, this library is not published to `npm`.  However, you can use it in npm projects by adding it to your `package.json` using a git url:

    "dependencies": { 
      "bulletphysics": "git://github.com/psigen/node-bulletphysics.git"
    }

Example Usage
=============

    var bullet = require('bulletphysics').bullet;
    var sdk = bullet.plNewBulletSdk();
    ...
    console.log('Doing Bullet stuff...');
    ...
    bullet.plDeletePhysicsSdk(sdk);

Compilation notes
=================
  * By default, `BT_DOUBLE_PRECISION` is enabled, because I need it.  It can be disabled by editing the `defines` in (binding.gyp)[binding.gyp].
  * During node-gyp, the tarball in (src)[src] is extracted to `src/bullet`.  If you want to mess with the bullet source before compiling, just put your own source code in that directory.
  * Some functions from the C API were removed, as they had no actual implementation in the source code.  They are commented out in [bulletphysics.js](lib/bulletphysics.js)
  * GPU accelerated functions were not compiled, since they add a dependency on OpenCL that I didn't want to handle.

References
==========
[node-ffi]: https://github.com/rbranson/node-ffi
[node-ffi-generate]: https://github.com/tjfontaine/node-ffi-generate