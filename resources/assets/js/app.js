
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
        // console.clear();
    },2e3);




   var view = (function (){
        return {
            name:'view',
            pasteBtn: $('span.pointer.icon.study-paste'),
            delete: $('.ddel'),
            courseNavigation: '.course-navigation',
            url:{
                baseUrl: location.origin + "/alison/public",
                routes : require('./routes.json'),
            }
        };
    })();


    var octopus = (function (v){


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

        console.log(route('editlesson',[2]));

        // Events
        v.pasteBtn.click(function (e) {
            var code = $(e.target).parent().prev().text();
            // console.log( 'CODE: ',code );
            tinymce.get("lesson")
                .execCommand('mceInsertContent', false, code);
        });

        v.delete.click(function () {
            v.currnetDel = $(this).parent().find("a");
            v.currnetDelHref = $(v.currnetDel).attr('href');
            v.currnetDelId = v.currnetDelHref.slice(-1);
            v.deleteUrl = 2;
            function del(){
                jQuery.ajax({
                    url:route('deletelesson',v.currnetDelId),
                    method:'post',
                    data:{del:v.currnetDelId},
                    success:function (data) {
                       var cnav = $(data).find(v.courseNavigation);
                        $(v.courseNavigation).replaceWith(cnav);
                        location.href = route('lesson',course_id);
                    }
                })
            }
            var sure = confirm('დარწმუნებული ხარ რომ გინდა წაშლა?');
            if (sure){
                del();
            }



        });



        return {}
    })(view);



 window.StudyOnline = {
        view:view,
     octopus:octopus,
 };
})(jQuery);