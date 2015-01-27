var gulp = require('gulp');
var	plugins = require('gulp-load-plugins'),
	P = plugins({
		rename: {
			// 'gulp-minify-css': 'cssmin'
		}
	});	//获取插件集合

//配置参数
var path = {
	src: 'src/',
	dest: 'dist/'
}

//copy
gulp.task('copy', function () {
	gulp.src(path.src + '**/*')
		.pipe(gulp.dest('dist'));
});	

//压缩js
gulp.task('jsmin', function() {
  gulp.src( path.src + '**/*.js' )		//拿到源文件
    .pipe(P.uglify())					//压缩
    .pipe(P.rename({suffix: '.min'}))	//重命名
    .pipe(gulp.dest( path.dest ));		//输出
});

//压缩css
gulp.task('cssmin', function() {
  gulp.src( path.src + '**/*.css' )		//拿到源文件
    .pipe(P.minifyCss())					//压缩
    .pipe(P.rename({ extname: '.css' }))
    .pipe(gulp.dest( path.dest ));			//输出
});

//压缩图片
gulp.task('imgmin', function() {
  gulp.src( path.src + '**/*' )	//拿到源文件
    .pipe(P.imagemin())					//压缩
    .pipe(gulp.dest( path.dest ));				//输出
});

gulp.task('watch', function() {
  // gulp.watch(paths.scripts, ['jsmin']);
  gulp.watch(path.src + '**/*.css', ['cssmin']);
});

gulp.task('default', ['jsmin', 'cssmin', 'imgmin']);

