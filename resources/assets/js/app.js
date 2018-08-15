
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


(function ($){
    setTimeout(function(){
        console.clear();
    },2e3);




   var view = (function (){
        return {
            name:'view',
            pasteBtn        : $('span.pointer.icon.study-paste'),
            deleteLesson    : $('.deleteLesson'),
            deleteCourse    : $('.deleteCourse'),
            editResource    : $('#mymodal .study-edit'),
            deleteResource  : $('#mymodal .study-delete'),
            courseNavigation: '.course-navigation',
            url:{
                baseUrl: location.origin + "/alison/public",
                routes : require('./routes.json'),
            }
        };
    })();


    var octopus = (function (v){

        // Functions
        var route = function() {
            var args = Array.prototype.slice.call(arguments);
            var name = args.shift();

            if (v.url.routes[name] === undefined) {
                console.error('Unknown route ', name);
            } else {
                return v.url.baseUrl + '/' + v.url.routes[name]
                    .split('/')
                    .map(s => s[0] == '{' ? args.shift() : s)
                    .join('/');
            }};
        function del(page,id, redirect){
            jQuery.ajax({
                url:route(page,id),
                method:'post',
                success:function () {
                    location.href = redirect;
                }
            })
        }



        // Events
        v.pasteBtn.click(function (e) {
            var code = $(e.target).parent().prev().children();
            var mce = tinymce.get("lesson");
            mce.execCommand('mceInsertContent', false, code.prop('outerHTML') );
        });
        v.deleteLesson.click(function () {
            v.currnetDel = $(this).parent().find("a");
            v.currnetDelHref = $(v.currnetDel).attr('href');
            v.currnetDelId = v.currnetDelHref.slice(-1);

            var sure = confirm('დარწმუნებული ხარ რომ გინდა წაშლა?');
            if (sure){
                del('deletelesson',v.currnetDelId,route('lesson',course_id));
            }
        });
        v.deleteCourse.click(function () {
            var sure = confirm('დარწმუნებული ხარ რომ გინდა წაშლა?');
            if (sure){
                var id = $(this).data('course-id');
                del('delete',id,route('dashboard'));
            } else {
                console.log('არ გინდა და როგორც გინდა')
            }
        });
        v.editResource.click(function (e) {
            var resource_id = $(e.target).data('id');

            $.ajax({
                url:route('editres', resource_id ),
                type:'post',
                data: {name:'david'},
                success:function (d) {
                    console.log(d)
                }
            })
        });
        return {}
    })(view);



 window.StudyOnline = {
        view:view,
     octopus:octopus,
 };
})(jQuery);