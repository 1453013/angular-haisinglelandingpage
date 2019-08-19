webpackJsonp([0,3],{

    /***/ 340:
    /***/ function(module, exports) {
    
    function webpackEmptyContext(req) {
        throw new Error("Cannot find module '" + req + "'.");
    }
    webpackEmptyContext.keys = function() { return []; };
    webpackEmptyContext.resolve = webpackEmptyContext;
    module.exports = webpackEmptyContext;
    webpackEmptyContext.id = 340;
    
    
    /***/ },
    
    /***/ 341:
    /***/ function(module, exports, __webpack_require__) {
    
    "use strict";
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(460);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(430);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(459);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(451);
    
    
    
    
    
    if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_37" /* enableProdMode */])();
    }
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
    //# sourceMappingURL=/tmp/build_c2e1e00e01b965761024ccdda6220526/src/main.js.map
    
    /***/ },
    
    /***/ 450:
    /***/ function(module, exports, __webpack_require__) {
    
    "use strict";
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
    /* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    
    var AppComponent = (function () {
        function AppComponent() {
            this.title = 'Start Bootstrap';
        }
        AppComponent.prototype.ngAfterViewInit = function () {
            // jQuery for page scrolling feature - requires jQuery Easing plugin
            $('a.page-scroll').on('click', function (event) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: ($($anchor.attr('href')).offset().top - 50)
                }, 1250, 'easeInOutExpo');
                event.preventDefault();
            });
            // Highlight the top nav as scrolling occurs
            $('body').scrollspy({
                target: '.navbar-fixed-top',
                offset: 100
            });
            // Closes the Responsive Menu on Menu Item Click
            $('.navbar-collapse ul li a').click(function () {
                $('.navbar-toggle:visible').click();
            });
            // Offset for Main Navigation
            $('#mainNav').affix({
                offset: {
                    top: 50
                }
            });
        };
        AppComponent = __decorate([
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
                selector: 'app-root',
                template: __webpack_require__(614),
                styles: [__webpack_require__(613)]
            }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
            __metadata('design:paramtypes', [])
        ], AppComponent);
        return AppComponent;
    }());
    //# sourceMappingURL=/tmp/build_c2e1e00e01b965761024ccdda6220526/src/app.component.js.map
    
    /***/ },
    
    /***/ 451:
    /***/ function(module, exports, __webpack_require__) {
    
    "use strict";
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(190);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(420);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(426);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(450);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__main_nav_main_nav_component__ = __webpack_require__(452);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page_header_page_header_component__ = __webpack_require__(458);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__page_download_page_download_component__ = __webpack_require__(455);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__page_features_page_features_component__ = __webpack_require__(456);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__page_cta_page_cta_component__ = __webpack_require__(454);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__page_contact_page_contact_component__ = __webpack_require__(453);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__page_footer_page_footer_component__ = __webpack_require__(457);
    /* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    
    
    
    
    
    
    
    
    
    
    
    
    var AppModule = (function () {
        function AppModule() {
        }
        AppModule = __decorate([
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
                declarations: [
                    __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                    __WEBPACK_IMPORTED_MODULE_5__main_nav_main_nav_component__["a" /* MainNavComponent */],
                    __WEBPACK_IMPORTED_MODULE_6__page_header_page_header_component__["a" /* PageHeaderComponent */],
                    __WEBPACK_IMPORTED_MODULE_7__page_download_page_download_component__["a" /* PageDownloadComponent */],
                    __WEBPACK_IMPORTED_MODULE_8__page_features_page_features_component__["a" /* PageFeaturesComponent */],
                    __WEBPACK_IMPORTED_MODULE_9__page_cta_page_cta_component__["a" /* PageCtaComponent */],
                    __WEBPACK_IMPORTED_MODULE_10__page_contact_page_contact_component__["a" /* PageContactComponent */],
                    __WEBPACK_IMPORTED_MODULE_11__page_footer_page_footer_component__["a" /* PageFooterComponent */]
                ],
                imports: [
                    __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* BrowserModule */],
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                    __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                ],
                providers: [],
                bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
            }), 
            __metadata('design:paramtypes', [])
        ], AppModule);
        return AppModule;
    }());
    //# sourceMappingURL=/tmp/build_c2e1e00e01b965761024ccdda6220526/src/app.module.js.map
    
    /***/ },
    
    /***/ 452:
    /***/ function(module, exports, __webpack_require__) {
    
    "use strict";
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
    /* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MainNavComponent; });
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    
    var MainNavComponent = (function () {
        function MainNavComponent() {
            this.title = "Start Bootstrap";
        }
        MainNavComponent = __decorate([
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
                selector: 'main-nav',
                template: __webpack_require__(615)
            }), 
            __metadata('design:paramtypes', [])
        ], MainNavComponent);
        return MainNavComponent;
    }());
    //# sourceMappingURL=/tmp/build_c2e1e00e01b965761024ccdda6220526/src/main-nav.component.js.map
    
    /***/ },
    
    /***/ 453:
    /***/ function(module, exports, __webpack_require__) {
    
    "use strict";
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
    /* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PageContactComponent; });
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    
    var PageContactComponent = (function () {
        function PageContactComponent() {
        }
        PageContactComponent = __decorate([
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
                selector: 'page-contact',
                template: __webpack_require__(616)
            }), 
            __metadata('design:paramtypes', [])
        ], PageContactComponent);
        return PageContactComponent;
    }());
    //# sourceMappingURL=/tmp/build_c2e1e00e01b965761024ccdda6220526/src/page-contact.component.js.map
    
    /***/ },
    
    /***/ 454:
    /***/ function(module, exports, __webpack_require__) {
    
    "use strict";
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
    /* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PageCtaComponent; });
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    
    var PageCtaComponent = (function () {
        function PageCtaComponent() {
        }
        PageCtaComponent = __decorate([
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
                selector: 'page-cta',
                template: __webpack_require__(617)
            }), 
            __metadata('design:paramtypes', [])
        ], PageCtaComponent);
        return PageCtaComponent;
    }());
    //# sourceMappingURL=/tmp/build_c2e1e00e01b965761024ccdda6220526/src/page-cta.component.js.map
    
    /***/ },
    
    /***/ 455:
    /***/ function(module, exports, __webpack_require__) {
    
    "use strict";
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
    /* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PageDownloadComponent; });
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    
    var PageDownloadComponent = (function () {
        function PageDownloadComponent() {
        }
        PageDownloadComponent = __decorate([
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
                selector: 'page-download',
                template: __webpack_require__(618)
            }), 
            __metadata('design:paramtypes', [])
        ], PageDownloadComponent);
        return PageDownloadComponent;
    }());
    //# sourceMappingURL=/tmp/build_c2e1e00e01b965761024ccdda6220526/src/page-download.component.js.map
    
    /***/ },
    
    /***/ 456:
    /***/ function(module, exports, __webpack_require__) {
    
    "use strict";
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
    /* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PageFeaturesComponent; });
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    
    var PageFeaturesComponent = (function () {
        function PageFeaturesComponent() {
        }
        PageFeaturesComponent = __decorate([
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
                selector: 'page-features',
                template: __webpack_require__(619)
            }), 
            __metadata('design:paramtypes', [])
        ], PageFeaturesComponent);
        return PageFeaturesComponent;
    }());
    //# sourceMappingURL=/tmp/build_c2e1e00e01b965761024ccdda6220526/src/page-features.component.js.map
    
    /***/ },
    
    /***/ 457:
    /***/ function(module, exports, __webpack_require__) {
    
    "use strict";
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
    /* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PageFooterComponent; });
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    
    var PageFooterComponent = (function () {
        function PageFooterComponent() {
        }
        PageFooterComponent = __decorate([
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
                selector: 'page-footer',
                template: __webpack_require__(620)
            }), 
            __metadata('design:paramtypes', [])
        ], PageFooterComponent);
        return PageFooterComponent;
    }());
    //# sourceMappingURL=/tmp/build_c2e1e00e01b965761024ccdda6220526/src/page-footer.component.js.map
    
    /***/ },
    
    /***/ 458:
    /***/ function(module, exports, __webpack_require__) {
    
    "use strict";
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
    /* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PageHeaderComponent; });
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    
    var PageHeaderComponent = (function () {
        function PageHeaderComponent() {
        }
        PageHeaderComponent = __decorate([
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
                selector: 'page-header',
                template: __webpack_require__(621)
            }), 
            __metadata('design:paramtypes', [])
        ], PageHeaderComponent);
        return PageHeaderComponent;
    }());
    //# sourceMappingURL=/tmp/build_c2e1e00e01b965761024ccdda6220526/src/page-header.component.js.map
    
    /***/ },
    
    /***/ 459:
    /***/ function(module, exports, __webpack_require__) {
    
    "use strict";
    /* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
    // The file contents for the current environment will overwrite these during build.
    // The build system defaults to the dev environment which uses `environment.ts`, but if you do
    // `ng build --env=prod` then `environment.prod.ts` will be used instead.
    // The list of which env maps to which file can be found in `angular-cli.json`.
    var environment = {
        production: false
    };
    //# sourceMappingURL=/tmp/build_c2e1e00e01b965761024ccdda6220526/src/environment.js.map
    
    /***/ },
    
    /***/ 460:
    /***/ function(module, exports, __webpack_require__) {
    
    "use strict";
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(474);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(467);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(463);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(469);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(468);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(466);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(465);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(473);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(462);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(461);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(471);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(464);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(472);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(470);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(475);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(634);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //# sourceMappingURL=/tmp/build_c2e1e00e01b965761024ccdda6220526/src/polyfills.js.map
    
    /***/ },
    
    /***/ 613:
    /***/ function(module, exports) {
    
    module.exports = ""
    
    /***/ },
    
    /***/ 614:
    /***/ function(module, exports) {
    
    module.exports = "<main-nav></main-nav>\n\n<page-header></page-header>\n\n<page-download></page-download>\n\n<page-features></page-features>\n\n<page-cta></page-cta>\n\n<page-contact></page-contact>\n\n<page-footer></page-footer>\n"
    
    /***/ },
    
    /***/ 615:
    /***/ function(module, exports) {
    
    module.exports = "<nav id=\"mainNav\" class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\"\n              data-target=\"#bs-example-navbar-collapse-1\">\n        <span class=\"sr-only\">Toggle navigation</span> Menu <i class=\"fa fa-bars\"></i>\n      </button>\n      <a pageScroll class=\"navbar-brand page-scroll\" href=\"#page-top\">{{ title }}</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li>\n          <a pageScroll class=\"page-scroll\" href=\"#download\">Download</a>\n        </li>\n        <li>\n          <a pageScroll class=\"page-scroll\" href=\"#features\">Features</a>\n        </li>\n        <li>\n          <a pageScroll class=\"page-scroll\" href=\"#contact\">Contact</a>\n        </li>\n      </ul>\n    </div>\n    <!-- /.navbar-collapse -->\n  </div>\n  <!-- /.container-fluid -->\n</nav>\n"
    
    /***/ },
    
    /***/ 616:
    /***/ function(module, exports) {
    
    module.exports = "<section id=\"contact\" class=\"contact bg-primary\">\n  <div class=\"container\">\n    <h2>We <i class=\"fa fa-heart\"></i> new friends!</h2>\n    <ul class=\"list-inline list-social\">\n      <li class=\"social-twitter\">\n        <a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\n      </li>\n      <li class=\"social-facebook\">\n        <a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\n      </li>\n      <li class=\"social-google-plus\">\n        <a href=\"#\"><i class=\"fa fa-google-plus\"></i></a>\n      </li>\n    </ul>\n  </div>\n</section>\n"
    
    /***/ },
    
    /***/ 617:
    /***/ function(module, exports) {
    
    module.exports = "<section class=\"cta\">\n  <div class=\"cta-content\">\n    <div class=\"container\">\n      <h2>Stop waiting.<br>Start building.</h2>\n      <a pageScroll href=\"#contact\" class=\"btn btn-outline btn-xl page-scroll\">Let's Get Started!</a>\n    </div>\n  </div>\n  <div class=\"overlay\"></div>\n</section>\n"
    
    /***/ },
    
    /***/ 618:
    /***/ function(module, exports) {
    
    module.exports = "<section id=\"download\" class=\"download bg-primary text-center\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-8 col-md-offset-2\">\n        <h2 class=\"section-heading\">Discover what all the buzz is about!</h2>\n        <p>Our app is available on any mobile device! Download now to get started!</p>\n        <div class=\"badges\">\n          <a class=\"badge-link\" href=\"#\"><img src=\"assets/img/google-play-badge.svg\" alt=\"\"></a>\n          <a class=\"badge-link\" href=\"#\"><img src=\"assets/img/app-store-badge.svg\" alt=\"\"></a>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"
    
    /***/ },
    
    /***/ 619:
    /***/ function(module, exports) {
    
    module.exports = "<section id=\"features\" class=\"features\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 text-center\">\n        <div class=\"section-heading\">\n          <h2>Unlimited Features, Unlimited Fun</h2>\n          <p class=\"text-muted\">Check out what you can do with this app theme!</p>\n          <hr>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"device-container\">\n          <div class=\"device-mockup iphone6_plus portrait white\">\n            <div class=\"device\">\n              <div class=\"screen\">\n                <!-- Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! -->\n                <img src=\"assets/img/demo-screen-1.jpg\" class=\"img-responsive\" alt=\"\"></div>\n              <div class=\"button\">\n                <!-- You can hook the \"home button\" to some JavaScript events or just remove it -->\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-8\">\n        <div class=\"container-fluid\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"feature-item\">\n                <i class=\"icon-screen-smartphone text-primary\"></i>\n                <h3>Device Mockups</h3>\n                <p class=\"text-muted\">Ready to use HTML/CSS device mockups, no Photoshop required!</p>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"feature-item\">\n                <i class=\"icon-camera text-primary\"></i>\n                <h3>Flexible Use</h3>\n                <p class=\"text-muted\">Put an image, video, animation, or anything else in the screen!</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"feature-item\">\n                <i class=\"icon-present text-primary\"></i>\n                <h3>Free to Use</h3>\n                <p class=\"text-muted\">As always, this theme is free to download and use for any purpose!</p>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"feature-item\">\n                <i class=\"icon-lock-open text-primary\"></i>\n                <h3>Open Source</h3>\n                <p class=\"text-muted\">Since this theme is MIT licensed, you can use it commercially!</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"
    
    /***/ },
    
    /***/ 620:
    /***/ function(module, exports) {
    
    module.exports = "<footer>\n  <div class=\"container\">\n    <p>&copy; 2016 Start Bootstrap. All Rights Reserved.</p>\n    <ul class=\"list-inline\">\n      <li>\n        <a href=\"#\">Privacy</a>\n      </li>\n      <li>\n        <a href=\"#\">Terms</a>\n      </li>\n      <li>\n        <a href=\"#\">FAQ</a>\n      </li>\n    </ul>\n  </div>\n</footer>\n"
    
    /***/ },
    
    /***/ 621:
    /***/ function(module, exports) {
    
    module.exports = "<header>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-7\">\n        <div class=\"header-content\">\n          <div class=\"header-content-inner\">\n            <h1>New Age is an app landing page that will help you beautifully showcase your new mobile app, or anything\n              else!</h1>\n            <a pageScroll href=\"#download\" class=\"btn btn-outline btn-xl page-scroll\">Start Now for Free!</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-5\">\n        <div class=\"device-container\">\n          <div class=\"device-mockup iphone6_plus portrait white\">\n            <div class=\"device\">\n              <div class=\"screen\">\n                <!-- Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! -->\n                <img src=\"assets/img/demo-screen-1.jpg\" class=\"img-responsive\" alt=\"\">\n              </div>\n              <div class=\"button\">\n                <!-- You can hook the \"home button\" to some JavaScript events or just remove it -->\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</header>\n"
    
    /***/ },
    
    /***/ 635:
    /***/ function(module, exports, __webpack_require__) {
    
    module.exports = __webpack_require__(341);
    
    
    /***/ }
    
    },[635]);
    //# sourceMappingURL=main.bundle.map