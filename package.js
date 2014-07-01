Package.describe({
  summary: "Ultra-lightweight, convention-over-configuration module containers for Meteor."
});

Package.on_use(function (api, where) {
  api.add_files('meteor-amethyst.js', ['client', 'server']);
});

Package.on_test(function (api) {
  api.use('meteor-amethyst');
  api.add_files('meteor-amethyst_tests.js', ['client', 'server']);
});
