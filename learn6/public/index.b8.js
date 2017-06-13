/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

var judgeFlag = true;
var img = document.getElementsByTagName('img')[0];
var allImages = document.getElementsByTagName('img');
var urls = [];

if (!window.requestAnimationFrame) {
  window.requestAnimationFrame = function (fn) {
    return setTimeout(fn, 17);
  };
}

var judgeImg = function () {
  function judgeImg(img) {
    this.img = img;
    this.url = img ? img.getAttribute('get') : '';
    this.cacheImage = new Image();
    this.ifIgsist = false;
    this.cacheImage.src = this.url;
  }
  judgeImg.prototype.judgeApplication = function () {
    if (this.cacheImage.complete) {
      this.ifIgsist = true;
      this.ifGetImg();
    }
    if (!this.ifIgsist) {
      requestAnimationFrame(this.judgeApplication.bind(this));
    }
  };
  judgeImg.prototype.control = function () {
    this.judgeApplication();
  };
  judgeImg.prototype.ifGetImg = function () {
    urls.push(this.url);
    return this.url;
  };
  return judgeImg;
}();

// var imgss = new judgeImg(img);
// imgss.control();
var allInit = function () {
  function allInit(allImages, ifFillImg, fn) {
    var allVariables = {
      long: allImages ? allImages.length : 0,
      allImages: allImages,
      londingLength: 0,
      ifFillImg: ifFillImg ? ifFillImg : false,
      customChange: fn ? fn : function () {}
    };
    for (var i = 0; i < allVariables.long; i++) {
      var img = new judgeImg(allImages[i]);
      img.control();
    }
    function forEachAllImg() {
      allVariables.londingLength = urls.length;
      console.log(allVariables.londingLength);
      if (urls.length == allVariables.long) {
        allVariables.customChange();
        for (var i = 0; i < allVariables.long; i++) {
          if (allVariables.ifFillImg) {
            var set = function set() {
              // console.log(allVariables.allImages[i]);
            };

            allVariables.allImages[i].src = urls[i];
            setTimeout(set, 1000);
          }
        }
        return false;
      }
      requestAnimationFrame(forEachAllImg);
    }
    forEachAllImg();
    return allVariables.long;
  }
  return allInit;
}();

var ss = allInit(allImages, true, function () {
  console.log('sss');
});

/***/ })
/******/ ]);