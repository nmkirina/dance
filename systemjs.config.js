(function (global) {
  System.config({
    paths: {
      // псевдоним для пути к модулям
      'npm:': 'node_modules/'
    },
    // указываем загрузчику System, где искать модули
    map: {
      // наше приложение будет находиться в папке app
      app: 'app',
      // пакеты angular
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/animations': 'npm:@angular/animations/bundles/animations.umd.js',
      '@angular/animations/browser': 'npm:@angular/animations/bundles/animations-browser.umd.js',
      '@angular/platform-browser/animations': 'npm:@angular/platform-browser/bundles/platform-browser-animations.umd.js',   
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      // остальные пакеты
      'rxjs':                      'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
      'angular2-image-gallery': 'npm:angular2-image-gallery',
      'web-animations-js': 'npm:web-animations-js/web-animations.min.js',
      'hammerjs': 'npm:hammerjs/hammer.js',
      '@agm/core': 'npm:@agm/core/core.umd.js'
    },
    // пакеты, которые указывают загрузчику System, как загружать файлы без имени и расширения
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
    },
    'angular2-image-gallery': {
        main: './index.js',
        defaultExtension: 'js'
    }
    }
  });
})(this);