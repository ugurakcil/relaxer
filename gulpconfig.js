var assetsPath = './public/assets/';
var resourcesPath = './resources/';

var path = {
   bower: './bower_components/',
   sass: resourcesPath + 'sass/',
   resourcesCss: resourcesPath + 'css/',
   resourcesJs: resourcesPath + 'js/',
   resourcesImage: resourcesPath + 'images/',
   font: assetsPath + 'fonts/',
   css: assetsPath + 'css/',
   script: assetsPath + 'js/',
   images: assetsPath + 'images/',
}

/* Bower files to be prepared. 
 * Add your file here to send public directory
 * and send "gulp" on terminal.
 * */

var sassFiles = [,
   path.sass + 'variables.scss',
   path.bower + 'bootstrap-sass/assets/stylesheets',
   path.bower + 'font-awesome/scss',
   path.sass + 'custom.scss'
];

var fontFiles = [
   path.bower + 'font-awesome/fonts/**.*',
   path.bower + 'bootstrap-sass/assets/fonts/bootstrap/**.*'
];

var scriptFiles = [
   path.bower + 'jquery/dist/jquery.js',
   path.bower + 'bootstrap-sass/assets/javascripts/bootstrap.js',
   path.resourcesJs + '**.*'
];

var styleFiles = [
   path.resourcesCss + '**.*'
];

var imageFiles = [
   path.resourcesImage + '**/*'
];