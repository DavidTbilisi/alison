
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
        };
    })();


    var octopus = (function (v){

        // Events
        v.pasteBtn.click(function (e) {
            var code = $(e.target).parent().prev().text();
            // console.log( 'CODE: ',code );
            tinymce.get("lesson")
                .execCommand('mceInsertContent', false, code);
        });

        v.delete.click(function () {
            var sure = confirm('დარწმუნებული ხარ რომ გინდა წაშლა?');
        });

        return {}
    })(view);


 window.StudyOnline = {
        view:view,
     octopus:octopus,
 };
})(jQuery);