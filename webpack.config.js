const path = require('path');

module.exports = {
    mode: 'production',
    entry: '/src/js/script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js',
    },
    watch: true,
    devtool: "source-map",
    module: {
        rules: [{
            // находим все файлы js
            test: /\.m?js$/,
            // исключаем из этих найденных файлов 
            // node_modules и bower_components
            exclude: /(node_modules|bower_components)/,
            use: {
            // используй babel-loader. Это npm пакет,
            // который позволяет работать с babely через
            // wabpack
                loader: 'babel-loader',
                options: {
                    presets: [
                        // настройка preset-env
                        ['@babel/preset-env', {
                            // видить появляющиеся ошибки
                            debug: true,
                            // настрока corejs
                            corejs: 3,
            //                 подключаются только те
            // полифилы, которые нужны
                            useBuiltIns: "usage"
                        }]
                    ]
                }
            }
        }]
    }

  

};