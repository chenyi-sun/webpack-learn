var gulp = require('gulp'),
    cssmin = require('gulp-minify-css'),
    sass = require('gulp-sass'),
    htmlmin = require('gulp-htmlmin'),
    connect = require('gulp-connect'),
    amdOptimize = require('amd-optimize'),
    concatFile = require('gulp-concat'),
    uglify = require('gulp-uglify');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');
var concat = require('gulp-concat');
var handlebars = require('gulp-handlebars');
   
gulp.task('default', function(){
    
});

gulp.task('html', function(){
  gulp.src('./*.html')
      .pipe(connect.reload());
});
gulp.task('testWatch', function(){
    gulp.watch('less/*.less', ['testLess','html']);
    gulp.watch('html/*.html',['html']);
    gulp.watch('js/*.js',['html']);
});
gulp.task('connect',function(){
    connect.server({
        root:'./',  
        ip:'192.168.31.110',
        livereload:true
    })
})
gulp.task('testLess', function(){
    gulp.src([
        'less/*.less'
    ])
    .pipe(less())
    .pipe(sourcemaps.write())
    .pipe(autoprefixer({
        browsers: ['last 2 versions', 'Android >= 4.0'],
        cascade: true, //是否美化属性值 默认：true 像这样：
        //-webkit-transform: rotate(45deg);
        //        transform: rotate(45deg);
        remove:true //是否去掉不必要的前缀 默认：true 
    }))
    .pipe(cssmin())
    .pipe(gulp.dest('css'));
});


gulp.task('testImagemin', function(){
    gulp.src('src/imgs/*.{png,jpg,gif,ico}')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});





