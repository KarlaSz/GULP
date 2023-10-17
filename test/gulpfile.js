const gulp = require('gulp');

//stara metoda
/* gulp.task('test', function(done){
    console.log('test');
    done()
}) */

//dobra metoda, trzeba dawac parametry i poznije go wywolac jako zakonczenie funkcji zeby gulp dzialal prawidlowo
function test2(cb) {
    console.log('test2');
    cb()
}

exports.mleko = test2