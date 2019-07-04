module.exports = {
  name: 'recreate-shapely-demo',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/recreate-shapely-demo',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
