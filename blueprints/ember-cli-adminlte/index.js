/*jshint node:true*/

module.exports = {
  description: 'Add bower dependencies for bootstrap and admin-lte to the project',

  normalizeEntityName: function() {
    // allows us to run ember -g ember-bootstrap-switch and not blow up
    // because ember cli normally expects the format
    // ember generate <entitiyName> <blueprint>
  }, // :normalizeEntityName

  afterInstall: function(options) {
    return this.addBowerPackagesToProject([{
      name: 'admin-lte',
      target: 'v2.4.0-rc'
    }]);
  } // :afterInstall

}; // module.exports
