/* jshint node: true */
gulp_place("all", "clean");//gulp.remove.line
gulp_place('{ "file": "main.sub.js", "name": "${app.name}", "type": "module" }', 'combine');