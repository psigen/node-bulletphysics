{
  'targets': [
    {
      'target_name': 'bullet',
      'product_prefix': 'lib',
      'type': 'shared_library',
      'defines': [ 'BT_USE_DOUBLE_PRECISION' ],
      'sources': [ '<!@(find src/bullet/src -name *.cpp | grep -v GpuSoftBodySolvers)' ],
      'include_dirs': [ '<!(test -d src/bullet || (tar -xf "src/bullet-2.81-rev2613.tgz" -C src/ && mv src/bullet-2.81-rev2613 src/bullet) && echo src/bullet/src )' ]
    }
  ]
}
