Package.describe({
  name: "fermuch:cheerio",
  summary: "cheerio wrapped for meteor",
  git: "https://github.com/fermuch/cheerio.git",
  version: "0.19.0"
});

Npm.depends({cheerio: "0.19.0"});

Package.onUse(function(api){
  api.versionsFrom("0.9.0");

  api.export && api.export('cheerio');
  api.addFiles('cheerio.js', 'server');

});
