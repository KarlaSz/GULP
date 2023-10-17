/* const gulp = require("gulp"); */ //import gulp ogolny
/* const { series, parallel } = require("gulp"); */ //import drugim sposobem

//stara metoda
/* gulp.task('test', function(done){
    console.log('test');
    done()
}) */

//dobra metoda, trzeba dawac parametry i poznije go wywolac jako zakonczenie funkcji zeby gulp dzialal prawidlowo
/* function test2(cb) {
    console.log('test2');
    cb()
}

exports.mleko = test2 */

//series and parallel

/* function text1(done) {
  console.log(gulp);
  done();
}
 function text2(done) {
  console.log("abcd");
  done();
}  */

/* exports.showTextS = gulp.series(text1, text2); //dodawac gulp przed jesli na gorze nie jest zmienna okreslona
exports.showTextP = parallel(text1, text2); */

//export default

/* function text1(done) {
  console.log(1234);
  done();
}
function text2(done) {
  console.log("abcd");
  done();
}

exports.text1 = text1;
exports.text2 = text2;

exports.default = text1 */ //tylko jeden export.default moze byc na stronie
const { series, parallel } = require("gulp");

function sass(done) {
  console.log("Kompiluje Sass");
  done();
}
function html(done) {
  console.log("minifikuje html");
  done();
}
function liveServer(done) {
  console.log("uruchamiam live server");
  done();
}

/* exports.default = series(sass, html); */
const mainfunction = parallel(sass, html);
exports.default = series(mainfunction, liveServer);
