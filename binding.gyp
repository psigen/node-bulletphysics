{
  'targets': [
    {
      'target_name': 'bullet',
      'product_prefix': 'lib',
      'type': 'static_library',
      'sources': [ '<!(test -d src/bullet || (tar -xf "src/bullet-2.81-rev2613.tgz" -C src/ && mv src/bullet-2.81-rev2613 src/bullet) && echo src/bullet )' ],
      'cflags': [ '-DBT_USE_DOUBLE_PRECISION' ]
    }
  ]
}
