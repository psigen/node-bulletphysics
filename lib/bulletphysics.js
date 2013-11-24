/**
 * Node.js Bullet binding through node-ffi.
 * 
 * https://github.com/rbranson/node-ffi/wiki/Node-FFI-Tutorial
 */
var path = require('path');

var ref = require('ref');
var ffi = require('ffi');

// Bullet type definitions
var plReal = ref.types.double;
var plVector3 = ref.types.void; // plReal[3]
var plQuaternion = ref.types.void; // plRead[4]
var plHandle = ref.refType(ref.types.void); // typedef struct {int unused; } *handle

var plPhysicsSdkHandle = plHandle;
var plDynamicsWorldHandle = plHandle;
var plRigidBodyHandle = plHandle;
var plCollisionShapeHandle = plHandle;
var plConstraintHandle = plHandle;
var plMeshInterfaceHandle = plHandle;
var plCollisionBroadphaseHandle = plHandle;
var plBroadphaseProxyHandle = plHandle;
var plCollisionWorldHandle = plHandle;

var btBroadphaseCallback = ffi.Function('void', [ 'pointer', 'pointer', 'pointer' ]);

// Create binding to bullet C api
var libbullet = ffi.Library(path.join(__dirname, '../build/Release/libbullet.so'), {

    // Create and Delete a Physics SDK 
    'plNewBulletSdk': [ plPhysicsSdkHandle, [] ],
    'plDeletePhysicsSdk': [ 'void', [ plPhysicsSdkHandle ] ],

    // Collision World, not strictly necessary, you can also just create a Dynamics World with Rigid Bodies which internally manages the Collision World with Collision Objects 
    'plCreateSapBroadphase': [ plCollisionBroadphaseHandle, [ btBroadphaseCallback, btBroadphaseCallback ] ],
    'plCreateProxy': [ plBroadphaseProxyHandle, [ plCollisionBroadphaseHandle, 'pointer', plReal, plReal, plReal, plReal, plReal, plReal ] ],
    'plDestroyProxy': [ 'void', [ plCollisionBroadphaseHandle, plBroadphaseProxyHandle ] ],
    'plSetBoundingBox': [ 'void', [ plBroadphaseProxyHandle, plReal, plReal, plReal, plReal, plReal, plReal ] ],
    'plCreateCollisionWorld': [ plCollisionWorldHandle, [ plPhysicsSdkHandle ] ],
    
    // Dynamics World 
    'plCreateDynamicWorld': [ plDynamicsWorldHandle, [ plPhysicsSdkHandle ] ],
    'plDeleteDynamicsWorld': [ 'void', [ plDynamicsWorldHandle ] ],
    'plStepSimulation': [ 'void', [ plDynamicsWorldHandle, pReal ] ],
    'plAddRigidBody': [ 'void', [ plDynamicsWorldHandle, plRigidBodyHandle ] ],
    
                          

//    'sqlite3_open': [ 'int', [ 'string', sqlite3PtrPtr ] ],
//    'sqlite3_close': [ 'int', [ sqlite3PtrPtr ] ],
//    'sqlite3_exec': [ 'int', [ sqlite3PtrPtr, 'string', 'pointer', 'pointer', stringPtr ] ],
//    'sqlite3_changes': [ 'int', [ sqlite3PtrPtr ]]
});

// Export the library to modules using this library
exports = module.exports = libbullet


