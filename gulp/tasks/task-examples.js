/* jshint esversion: 6,-W097, -W040, node: true, expr: true, undef: true, maxparams: 4 */
module.exports= function({app, $gulp_folder, gulp, error, $g, $o, $run}){
    /* jshint -W061 */const gulp_place= $g.place({ variable_eval: (str)=> eval(str) });/* jshint +W061 */
    const 
        to_folder= "docs/",
        from_folder= "src_docs/examples/";
    return function(cb){
        gulp.src([from_folder+"*.html", '!'+from_folder+'*.sub.html'])
            .pipe(gulp_place({ folder: from_folder, string_wrapper: '' }))
            .pipe(gulp.dest(to_folder))
            .on('end', function(){
                gulp.src([app.directories.bin+app.name+"-namespace.min.js"])
                .pipe(gulp.dest(to_folder+"examples_files/"))
                .on('end', cb);
            });
    };
};