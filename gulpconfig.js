var assetsPath = './public/assets/';
var resourcesPath = './resources/';

var path = {
   bower: './bower_components/',
   resourcesTmp: resourcesPath + 'tmp/',
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
   path.bower + 'ekko-lightbox/dist/ekko-lightbox.js',
   path.bower + 'smartmenus/dist/jquery.smartmenus.js',
   path.bower + 'smartmenus/dist/addons/bootstrap/jquery.smartmenus.bootstrap.js',
   path.resourcesJs + '**.*',
   path.bower + 'matchHeight/dist/jquery.matchHeight.js',
   path.bower + 'bootstrap-select/dist/js/bootstrap-select.js',
   path.bower + 'bootstrap-select/dist/js/i18n/defaults-tr_TR.js',
];

var styleFiles = [
   path.bower + 'ekko-lightbox/dist/ekko-lightbox.css',
   path.bower + 'smartmenus/dist/addons/bootstrap/jquery.smartmenus.bootstrap.css',
   path.bower + 'bootstrap-select/dist/css/bootstrap-select.css',
   path.resourcesCss + '**.*',
];

var imageFiles = [
   path.resourcesImage + '**/*'
];
