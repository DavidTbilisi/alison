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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(3);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

// require('./bootstrap');
//
// window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Vue.component('example-component', require('./components/ExampleComponent.vue'));
//
// const app = new Vue({
//     el: '#app'
// });


(function ($) {

    setTimeout(function () {
        console.clear();
    }, 2e3);

    var view = function () {
        return {
            name: 'view',
            pasteBtn: $('span.pointer.icon.study-paste'),
            deleteLesson: $('.deleteLesson'),
            deleteCourse: $('.deleteCourse'),

            mymodal: $('#mymodal'), //not dynamic;
            editResource: $('#mymodal .study-edit'), //not dynamic;
            editName: $('#mymodal [name=name]'), //not dynamic;
            editDesc: $('#mymodal [name=desc]'), //not dynamic;
            deleteResource: $('#mymodal .study-trash'), //not dynamic;

            courseNavigation: '.course-navigation',
            url: {
                baseUrl: location.origin + "/alison/public",
                routes: __webpack_require__(2)
            }
        };
    }();

    var octopus = function (v) {

        // Functions
        var route = function route() {
            var args = Array.prototype.slice.call(arguments);
            var name = args.shift();

            if (v.url.routes[name] === undefined) {
                console.error('Unknown route ', name);
            } else {
                return v.url.baseUrl + '/' + v.url.routes[name].split('/').map(function (s) {
                    return s[0] == '{' ? args.shift() : s;
                }).join('/');
            }
        };
        function del(page, id, redirect) {
            jQuery.ajax({
                url: route(page, id),
                method: 'post',
                success: function success() {
                    location.href = redirect;
                }
            });
        }
        function l() {
            arguments.join = [].join;
            var args = arguments.join(":");
            console.log(args);
        }

        // Events
        v.pasteBtn.on('click', function (e) {
            var code = $(e.target).parent().prev().children();
            var mce = tinymce.get("lesson");
            mce.execCommand('mceInsertContent', false, code.prop('outerHTML'));
        });
        v.deleteLesson.on('click', function () {
            v.currnetDel = $(this).parent().find("a");
            v.currnetDelHref = $(v.currnetDel).attr('href');
            v.currnetDelId = v.currnetDelHref.slice(-1);

            var sure = confirm('დარწმუნებული ხარ რომ გინდა წაშლა?');
            if (sure) {
                del('deletelesson', v.currnetDelId, route('lesson', course_id));
            }
        });
        v.deleteCourse.on('click', function () {
            var sure = confirm('დარწმუნებული ხარ რომ გინდა წაშლა?');
            if (sure) {
                var id = $(this).data('course-id');
                del('delete', id, route('dashboard'));
            } else {
                console.log('არ გინდა და როგორც გინდა');
            }
        });

        function editResourcesFn(e) {
            var resource_id = $(e.target).data('id');
            var target = $(e.target);
            var oneRow = target.parent().parent();
            var name = oneRow.find('.name');
            var desc = oneRow.find('.desc');
            function makeEditable(class1, class2) {
                var editClass = 'study-edit';
                var saveClass = 'study-save';
                target.toggleClass(editClass);
                target.toggleClass(saveClass);
                if (target.hasClass(saveClass)) {
                    name.attr('contenteditable', 'true');
                    desc.attr('contenteditable', 'true');
                } else {
                    name.attr('contenteditable', 'false');
                    desc.attr('contenteditable', 'false');
                }
            }
            makeEditable('study-edit', 'study-save');
            $.ajax({
                url: route('editres', resource_id),
                type: 'post',
                data: { "name": name.text(), "desc": desc.text() },
                beforeSend: function beforeSend() {
                    // console.log('sending info:');
                },
                success: function success(d) {
                    // console.log('d:', d);
                }
            });
        }

        $('#mymodal').on('click', '.study-edit', editResourcesFn);
        $('#mymodal').on('click', '.study-save', editResourcesFn);
        window.deleteRes = function (id) {
            $.ajax({
                url: route('deleteres', id),
                type: 'post',
                data: { "lesson_id": id },
                success: function success(d) {
                    console.log('d:', d);
                }
            });
            $.ajax({
                url: route('lesson', course_id),
                type: "get",
                success: function success(d) {
                    var toReplace = '#mymodal .modal-body';
                    var modalBody = $(toReplace);
                    console.log('mymodal:', $(d).find(toReplace));
                    modalBody.replaceWith($(d).find(toReplace));
                }
            });
        };

        //     $('#mymodal .study-trash').on('click',function (e) {
        //         var id = $(this).data('id');
        //         $.ajax({
        //             url:route('deleteres',id),
        //             type:'post',
        //             data:{"lesson_id":id},
        //             success:function (d) {
        //                 console.log('d:', d);
        //             }
        //         });
        //         $.ajax({
        //             url:route('lesson',course_id),
        //             type:"get",
        //             success:function (d) {
        //                 var toReplace = '#mymodal .modal-body';
        //                 var modalBody = $(toReplace);
        //                 console.log('mymodal:', $(d).find(toReplace));
        //                 modalBody.replaceWith($(d).find(toReplace))
        //             }
        //         })
        //     });
        //     return {}
    }(view);

    window.StudyOnline = {
        view: view,
        octopus: octopus

    };
})(jQuery);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = {"":"api/user","home":"/","addCategory":"addCategory","search":"search","login":"login","register":"register","reset":"reset","courses":"courses","certificate":"courses/certificate","diploma":"courses/diploma","about":"courses/{name?}","path":"learning-path","pathName":"learning-path/{name?}","dashboard":"admin","setNewPassword":"admin/setnewpassword","logout":"admin/logout","admincourses":"admin/courses","addcourse":"admin/courses/add","edit":"admin/courses/edit/{id}","delete":"admin/courses/delete/{id}","lesson":"admin/courses/{course_id}/lesson/{id?}","addlesson":"admin/courses/addlesson","editlesson":"admin/courses/editlesson/{id?}","deletelesson":"admin/courses/deletelesson/{id?}","addres":"admin/courses/addRes","editres":"admin/courses/editRes/{id?}","deleteres":"admin/courses/deleteRes/{id?}"}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);