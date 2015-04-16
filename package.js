Package.describe({
  name: "manuelschoebel:cheerio",
  summary: "cheerio wrapped for meteor",
  git: "https://github.com/DerMambo/cheerio.git",
  version: "0.0.1"
});

Npm.depends({cheerio: "0.19.0"});

Package.onUse(function(api){
  api.versionsFrom("0.9.0");

  api.export && api.export('cheerio');
  api.addFiles('cheerio.js', 'server');

});
