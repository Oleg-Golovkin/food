// Создаем пременные, к которым присваиваем
// установленные пакеты npm
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
//Удаляем метод .creat()
const rename = require("gulp-rename");
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass')(require('sass'));
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');




//1. Настраиваем обновление страницы
gulp.task('server', function () {
    //наименование первого  параметра - любое. 
    //Его используем как имя задачи
    browserSync.init({
        server: {
            baseDir: "dist"
            //меняем путь к корневой папке. Чтобы 
            // все шло в чистовую папку dist 
        }
    });
    gulp.watch('src/*.html').on('change', browserSync.reload);
    //следи за файлами html если изменились, то перезапускай 
    // обновление страницы
});

//2. Компиляция sass. Просто компилирует. Сам не запускается.
// Для этого следующая задача
gulp.task('styles', function () {
    return gulp.src('src/sass/**/*.+(scss|sass)')
        //Прописываем путь для gulp, в котором содержатся 
        // файлы с расширением sass или scss.
        // Символы *. это поиск каких либо расширений
        // Далее прописываем действия с файлами 
        .pipe(sass({
            outputStyle: 'expanded'
        }).on('error', sass.logError))
        /* без точек с запятой */
        // Файл стилей будет компилироваться из sass в css. 
        //Файл будет сжатым (outputStyle) Если будет ошибка, 
        // //то он покажет, где она (.on('error', sass.logError)). 
        .pipe(rename({ //измненение имени файла css
            suffix: ".min", //файлу css добавляем слова .min
        })) //без точек с запятой 
        .pipe(autoprefixer({
            /* в созданном css файле 
                       проставляем автопрефиксы */
            cascade: false
        })) /* без точек с запятой */
        // .pipe(cleanCSS({
        //     compatibility: 'ie8'
        // })) //сжимаем файл css
        .pipe(gulp.dest('dist/css')) /* без точек с запятой */
        // Теперь файл css помещаем в папку в чистовую папку dist
        .pipe(browserSync.stream()); /* точка с запятой */
    // После компиляции кода - обновление страницы
});

// 3. Автоматический запуск предыдущей задачи при
// измнении файла с расширением sass или scss
gulp.task('watch', function () {
    // Слежка за файлами scss sass css
    gulp.watch('src/sass/**/*.+(scss|sass|css)', gulp.parallel('styles'));
    //следи за файлами sass или scss или css если изм, то запускай компилятор
    // 5. Слежка за файлом html 
    gulp.watch('src/*.html').on('change', gulp.parallel('html'));
    // следи за файлом html      если поменялось, то выполняй задачу html 
    //   которая будет описана в пункте 6
    gulp.watch('src/js/**/*.js').on('change', gulp.parallel('scripts'));
    gulp.watch('src/img/**/*').on('all', gulp.parallel('image'));
    gulp.watch('src/icons/**/*').on('all', gulp.parallel('icons'));
    gulp.watch('src/fonts/**/*').on('all', gulp.parallel('icons'));
    // следи за папками js img icons, если поменялись, то выполняй
    // задачи ....
});
//  Копирование из crs в папку dist в АНАЛОГИЧНЫЕ ПАПКИ всех файлов, 
// которые
// понадобятся при просмотре страницы, а именно файлов html, 
//  всех файлов с форматом js, шрифтов, картинок,
//  css копировать не надо, поскольку эта операция делается в 
// пункте 2, а именно в gulp.task('styles', function () {  
// 6. Сжатие и перенос файла html из папки src в папку dist
gulp.task('html', function () {
    return gulp.src('src/*.html')
        // получаем любой * файл с расширением html, 
        // который находится в src
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        // сжимаем файл html
        .pipe(gulp.dest('dist/'));
    // КОПИРУЕМ сжатый файл  html в папку dist
    // поставить знак /  , чтобы помещалось в папку
        
});


// Копирование фалов js
gulp.task('scripts', function () {
    return gulp.src('src/js/**/*.js')
        // получаем любой * файл js, 
        // ИЗ ЛЮБОЙ ПАПКИ /**/ 
        .pipe(gulp.dest('dist/js'))
        // КОПИРУЕМ сжатый файл  html в папку dist
        // поставить знак /  , чтобы помещалось в папку
        .pipe(browserSync.stream());
    // обновление страницы, чтобы после изменения
    // файла скрипта не нужно было самому обновлять
});

// Копирование шрифтов по аналогии
gulp.task('fonts', function () {
    return gulp.src('src/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'))
        .pipe(browserSync.stream());
    // обновление страницы, чтобы после изменения
    // файла скрипта не нужно было самому обновлять
});

// Копирование icons по аналогии
gulp.task('icons', function () {
    return gulp.src('src/icons/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/icons'))
        .pipe(browserSync.stream());
    // обновление страницы, чтобы после изменения
    // файла скрипта не нужно было самому обновлять
});

// Копирование image по аналогии

gulp.task('image', function () {
    return gulp.src('src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img/'))
        .pipe(browserSync.stream());
    // обновление страницы, чтобы после изменения
    // файла скрипта не нужно было самому обновлять
});

// 4. Задача по запуску всех задач одновременно (паралельно).
gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'scripts', 'html', 'fonts', 'icons', 'image'));
// Первый параметр - по умолчанию