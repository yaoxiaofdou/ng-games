/**
 * Created by Administrator on 2016/3/30.
 */
var gulp = require("gulp"),
    less = require('gulp-less'),
    browserSync = require('browser-sync'),
    /*imagesmin = require('gulp-imagemin'),*/
    // cache = require('gulp-cache'), // 缓存（图片压缩后不压缩）
    del = require('del'),
    autoprefixer = require('gulp-autoprefixer'),
    plumber = require("gulp-plumber"),
    runSequence = require('run-sequence'),
    htmlmin = require('gulp-htmlmin'), //html压缩
    imagemin = require('gulp-imagemin'), //图片压缩
    pngcrush = require('imagemin-pngcrush'),
    minifycss = require('gulp-minify-css'), //css压缩
    uglify = require('gulp-uglify'), //js压缩
    concat = require('gulp-concat'), //文件合并
    rename = require('gulp-rename'), //文件更名
    notify = require('gulp-notify'); //提示信息

var config = {
    root: './',
    dist: "./dist/",
    dist_css: "./dist/css/",
    dist_images: './dist/images/',
    dist_js: './dist/js/',
    dist_fonts: './dist/fonts/',
    dist_html: './dist/static/',
    src: 'src/',
    src_less: './app/less/',
    src_css: './app/css/',
    src_images: './app/images/',
    src_js: './app/js/',
    src_fonts: './app/fonts/',
    src_html: './app/'
};

//start browserSync server
gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: [config.root]
        }
    })
});

//复制src目录下的fonts文件夹到dist目录下的fonts文件夹
gulp.task('fonts', function() {
    return gulp.src(config.src_fonts + "**.*") //fonts的格式要为 **.*
        .pipe(notify("fonts"))
        .pipe(gulp.dest(config.dist_fonts))

});

//压缩图片
gulp.task('images', function() {
    return gulp.src(config.src_images + "**/*.*")
        .pipe((imagemin({
            interlaced: true,
        })))
        .pipe(gulp.dest(config.dist_images))
});

// 压缩html
gulp.task('html', function() {
    return gulp.src(config.src_html + '*.html') // 目标文件
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest(config.dist_html)) //  输出文件
        .pipe(notify({
            message: 'html task ok'
        }));

});

// 合并、压缩js文件
gulp.task('js', function() {
    return gulp.src(config.src_js + '**/*.js')
        .pipe(concat('build.js'))
        //.pipe(uglify())
        .pipe(gulp.dest(config.root + 'app'))
        //.pipe(notify({
        //    message: 'js task ok'
        //}));
});

// //复制src目录下的static文件夹到dist目录下的static文件夹
// gulp.task('html',function(){
//    return gulp.src(config.src_html + "*.html")
//        .pipe(gulp.dest(config.dist_html));
// });

// //复制src目录下的js文件夹到dist目录下的js文件夹
// gulp.task('script',function(){
//     return gulp.src(config.src_js + "**/*.js")
//         .pipe(gulp.dest(config.dist_js))
// });

//编译less文件
gulp.task('less', function() {
    browserSync.notify("正在编译less");
    return gulp.src(config.src_less + "*.less")
        .pipe(concat("style.less"))
        .pipe(plumber())
        .pipe(less())
        .pipe(autoprefixer('last 10 versions', 'ie 8'))
        .pipe(gulp.dest(config.src_css))
        .pipe(notify("less编译完成"))
        .pipe(browserSync.reload({
            stream: true
        }))
});
//复制css
gulp.task("css", function() {
    return gulp.src(config.src_css + "main.css")
        .pipe(notify("复制css"))
        .pipe(gulp.dest(config.dist_css))
});

// 合并、压缩、重命名css
gulp.task('css', function() {
    return gulp.src(config.src_css + '*.css')
        // .pipe(concat('main.css'))    合并CSS
        .pipe(gulp.dest(config.src_css)) //  原始文件目录
        // .pipe(rename({ suffix: '.min' }))    //  加压缩文件后缀
        .pipe(minifycss())
        .pipe(gulp.dest(config.dist_css)) //  输出目录
        .pipe(notify({
            message: 'css task ok'
        }));
});

//清除生产文件
/*gulp.task('clean',function(){
 return del.sync('dist').then(function(cb){
 return cache.clearAll(cb);
 })
 });*/

gulp.task('clean:dist', function() {
    return del.sync(['dist/**/*', '!dist/images']);
});

gulp.task('watch', function() {
    gulp.watch(config.src_less + "*.less", ['less']); //监听less变化
    gulp.watch(config.root + "*.html", browserSync.reload); //监听主目录文件夹下的html变化
    gulp.watch(config.src_html + "*.html", browserSync.reload); //监听app目录下的html变化
    gulp.watch(config.src_js + "**/*.html", browserSync.reload); //监听app/js目录下的html变化
    gulp.watch(config.src_js + "**/*.js", ['js']); //监听src/js目录下的js变化
});

gulp.task('default', function(callback) {
    runSequence(['less', 'js', 'browserSync', 'watch', ], callback); //默认的开发任务，包括编译css，自动刷新浏览器和监听任务
});
gulp.task('build', function(callback) {
    runSequence('clean:dist', ['css', 'images', 'js', 'fonts', 'html'], callback); //默认的部署到生产环境的任务命令
});