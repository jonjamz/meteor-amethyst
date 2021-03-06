Package.describe({
  summary: "Ultra-lightweight, convention-over-configuration module containers for Meteor."
});

Package.on_use(function (api, where) {
  api.add_files('./amethyst/amethyst.js', ['client', 'server']);
});

Package.on_test(function (api) {
  api.use('amethyst');
  api.add_files('./tests/tests.js', ['client', 'server']);
});
