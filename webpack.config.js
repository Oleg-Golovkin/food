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

};