var FFI = require('ffi'),
    ArrayType = require('ref-array'),
    Struct = require('ref-struct'),
    ref = require('ref');

var voidPtr = ref.refType(ref.types.void);

exports.CONSTANTS = {};

var plPhysicsSdkHandle__ = exports.plPhysicsSdkHandle__ = Struct({
    unused: ref.types.int32,
});
var plPhysicsSdkHandle__Ptr = exports.plPhysicsSdkHandle__Ptr = ref.refType(plPhysicsSdkHandle__);
var plCollisionBroadphaseHandle__ = exports.plCollisionBroadphaseHandle__ = Struct({
    unused: ref.types.int32,
});
var plCollisionBroadphaseHandle__Ptr = exports.plCollisionBroadphaseHandle__Ptr = ref.refType(plCollisionBroadphaseHandle__);
var btBroadphaseCallback = exports.btBroadphaseCallback = FFI.Function(ref.types.void, [
    voidPtr,
    voidPtr,
    voidPtr,
]);
var btBroadphaseCallbackPtr = exports.btBroadphaseCallbackPtr = ref.refType(btBroadphaseCallback);
var plBroadphaseProxyHandle__ = exports.plBroadphaseProxyHandle__ = Struct({
    unused: ref.types.int32,
});
var plBroadphaseProxyHandle__Ptr = exports.plBroadphaseProxyHandle__Ptr = ref.refType(plBroadphaseProxyHandle__);
var plCollisionWorldHandle__ = exports.plCollisionWorldHandle__ = Struct({
    unused: ref.types.int32,
});
var plCollisionWorldHandle__Ptr = exports.plCollisionWorldHandle__Ptr = ref.refType(plCollisionWorldHandle__);
var plDynamicsWorldHandle__ = exports.plDynamicsWorldHandle__ = Struct({
    unused: ref.types.int32,
});
var plDynamicsWorldHandle__Ptr = exports.plDynamicsWorldHandle__Ptr = ref.refType(plDynamicsWorldHandle__);
var plRigidBodyHandle__ = exports.plRigidBodyHandle__ = Struct({
    unused: ref.types.int32,
});
var plRigidBodyHandle__Ptr = exports.plRigidBodyHandle__Ptr = ref.refType(plRigidBodyHandle__);
var plCollisionShapeHandle__ = exports.plCollisionShapeHandle__ = Struct({
    unused: ref.types.int32,
});
var plCollisionShapeHandle__Ptr = exports.plCollisionShapeHandle__Ptr = ref.refType(plCollisionShapeHandle__);
var plReal = exports.plReal = voidPtr;
var plRealPtr = exports.plRealPtr = ref.refType(plReal);
var plMeshInterfaceHandle__ = exports.plMeshInterfaceHandle__ = Struct({
    unused: ref.types.int32,
});
var plMeshInterfaceHandle__Ptr = exports.plMeshInterfaceHandle__Ptr = ref.refType(plMeshInterfaceHandle__);
var plRayCastResult = exports.plRayCastResult = Struct({
    m_body: plRigidBodyHandle__Ptr,
    m_shape: plCollisionShapeHandle__Ptr,
    m_positionWorld: ArrayType(ref.types.float, 3),
    m_normalWorld: ArrayType(ref.types.float, 3),
});
var plRayCastResultPtr = exports.plRayCastResultPtr = ref.refType(plRayCastResult);

exports. / home / pkv / Desktop / node - bulletphysics / build / Release / libbullet.so = new FFI.Library('/home/pkv/Desktop/node-bulletphysics/build/Release/libbullet.so', {
    plNewBulletSdk: [plPhysicsSdkHandle__Ptr, []],
    plDeletePhysicsSdk: [ref.types.void, [
        plPhysicsSdkHandle__Ptr,
    ]],
    plCreateSapBroadphase: [plCollisionBroadphaseHandle__Ptr, [
        btBroadphaseCallback,
        btBroadphaseCallback,
    ]],
    plDestroyBroadphase: [ref.types.void, [
        plCollisionBroadphaseHandle__Ptr,
    ]],
    plCreateProxy: [plBroadphaseProxyHandle__Ptr, [
        plCollisionBroadphaseHandle__Ptr,
        voidPtr,
        ref.types.float,
        ref.types.float,
        ref.types.float,
        ref.types.float,
        ref.types.float,
        ref.types.float,
    ]],
    plDestroyProxy: [ref.types.void, [
        plCollisionBroadphaseHandle__Ptr,
        plBroadphaseProxyHandle__Ptr,
    ]],
    plSetBoundingBox: [ref.types.void, [
        plBroadphaseProxyHandle__Ptr,
        ref.types.float,
        ref.types.float,
        ref.types.float,
        ref.types.float,
        ref.types.float,
        ref.types.float,
    ]],
    plCreateCollisionWorld: [plCollisionWorldHandle__Ptr, [
        plPhysicsSdkHandle__Ptr,
    ]],
    plCreateDynamicsWorld: [plDynamicsWorldHandle__Ptr, [
        plPhysicsSdkHandle__Ptr,
    ]],
    plDeleteDynamicsWorld: [ref.types.void, [
        plDynamicsWorldHandle__Ptr,
    ]],
    plStepSimulation: [ref.types.void, [
        plDynamicsWorldHandle__Ptr,
        ref.types.float,
    ]],
    plAddRigidBody: [ref.types.void, [
        plDynamicsWorldHandle__Ptr,
        plRigidBodyHandle__Ptr,
    ]],
    plRemoveRigidBody: [ref.types.void, [
        plDynamicsWorldHandle__Ptr,
        plRigidBodyHandle__Ptr,
    ]],
    plCreateRigidBody: [plRigidBodyHandle__Ptr, [
        voidPtr,
        ref.types.float,
        plCollisionShapeHandle__Ptr,
    ]],
    plDeleteRigidBody: [ref.types.void, [
        plRigidBodyHandle__Ptr,
    ]],
    plNewSphereShape: [plCollisionShapeHandle__Ptr, [
        ref.types.float,
    ]],
    plNewBoxShape: [plCollisionShapeHandle__Ptr, [
        ref.types.float,
        ref.types.float,
        ref.types.float,
    ]],
    plNewCapsuleShape: [plCollisionShapeHandle__Ptr, [
        ref.types.float,
        ref.types.float,
    ]],
    plNewConeShape: [plCollisionShapeHandle__Ptr, [
        ref.types.float,
        ref.types.float,
    ]],
    plNewCylinderShape: [plCollisionShapeHandle__Ptr, [
        ref.types.float,
        ref.types.float,
    ]],
    plNewCompoundShape: [plCollisionShapeHandle__Ptr, []],
    plAddChildShape: [ref.types.void, [
        plCollisionShapeHandle__Ptr,
        plCollisionShapeHandle__Ptr,
        plReal,
        plRealPtr,
    ]],
    plDeleteShape: [ref.types.void, [
        plCollisionShapeHandle__Ptr,
    ]],
    plNewConvexHullShape: [plCollisionShapeHandle__Ptr, []],
    plAddVertex: [ref.types.void, [
        plCollisionShapeHandle__Ptr,
        ref.types.float,
        ref.types.float,
        ref.types.float,
    ]],
    plNewMeshInterface: [plMeshInterfaceHandle__Ptr, []],
    plAddTriangle: [ref.types.void, [
        plMeshInterfaceHandle__Ptr,
        plRealPtr,
        plRealPtr,
        plRealPtr,
    ]],
    plNewStaticTriangleMeshShape: [plCollisionShapeHandle__Ptr, [
        plMeshInterfaceHandle__Ptr,
    ]],
    plSetScaling: [ref.types.void, [
        plCollisionShapeHandle__Ptr,
        plRealPtr,
    ]],
    plGetOpenGLMatrix: [ref.types.void, [
        plRigidBodyHandle__Ptr,
        plRealPtr,
    ]],
    plGetPosition: [ref.types.void, [
        plRigidBodyHandle__Ptr,
        plRealPtr,
    ]],
    plGetOrientation: [ref.types.void, [
        plRigidBodyHandle__Ptr,
        plRealPtr,
    ]],
    plSetPosition: [ref.types.void, [
        plRigidBodyHandle__Ptr,
        plRealPtr,
    ]],
    plSetOrientation: [ref.types.void, [
        plRigidBodyHandle__Ptr,
        plRealPtr,
    ]],
    plSetEuler: [ref.types.void, [
        ref.types.float,
        ref.types.float,
        ref.types.float,
        plRealPtr,
    ]],
    plSetOpenGLMatrix: [ref.types.void, [
        plRigidBodyHandle__Ptr,
        plRealPtr,
    ]],
    plRayCast: [ref.types.int32, [
        plDynamicsWorldHandle__Ptr,
        plRealPtr,
        plRealPtr,
        plRayCastResult,
    ]],
    plNearestPoints: [ref.types.double, [
        ref.refType(ref.types.float),
        ref.refType(ref.types.float),
        ref.refType(ref.types.float),
        ref.refType(ref.types.float),
        ref.refType(ref.types.float),
        ref.refType(ref.types.float),
        ref.refType(ref.types.float),
        ref.refType(ref.types.float),
        ref.refType(ref.types.float),
    ]],
});