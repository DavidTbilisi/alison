
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

// require('./bootstrap');
//
// window.Vue = require('vue');
window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
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
            pasteBtn        : $('span.pointer.icon.study-paste'),
            deleteLesson    : $('.deleteLesson'),
            deleteCourse    : $('.deleteCourse'),

            mymodal         : $('#mymodal'),             //not dynamic;
            editResource    : $('#mymodal .study-edit'), //not dynamic;
            editName        : $('#mymodal [name=name]'), //not dynamic;
            editDesc        : $('#mymodal [name=desc]'), //not dynamic;
            deleteResource  : $('#mymodal .study-trash'),//not dynamic;
            shopIt  : '.link-group a.icon',
            cartCount  : '.cart .update-order-amount',

            courseNavigation: '.course-navigation',
            url:{
                // todo: on server delete everything after  + sign
               baseUrl: location.origin + "/alison/public",
              //   baseUrl: location.origin,
                routes : require('./routes.json'),
            }
        };
    })();


    var octopus = (function (v){
        // Functions
        //
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

        function del(page, id, redirect){
            jQuery.ajax({
                url:route(page,id),
                method:'post',
                success:function () {
                    location.href = redirect;
                }
            })
        }
        function l () {
         arguments.join = [].join;
         var args = arguments.join(":");
         console.log(args);
        }
        function editResourcesFn(e){
            var resource_id = $(e.target).data('id');
            var target = $(e.target);
            var oneRow = target.parent().parent();
            var name = oneRow.find('.name');
            var desc = oneRow.find('.desc');
            function makeEditable(class1,class2){
                var editClass = 'study-edit';
                var saveClass = 'study-save';
                target.toggleClass(editClass);
                target.toggleClass(saveClass);
                if(target.hasClass(saveClass) ){
                    name.attr('contenteditable','true');
                    desc.attr('contenteditable','true');
                } else {
                    name.attr('contenteditable','false');
                    desc.attr('contenteditable','false');
                }
            }
            makeEditable('study-edit','study-save');
            $.ajax({
                url:route('editres', resource_id ),
                type:'post',
                data: {"name":name.text(), "desc": desc.text()},
                beforeSend:function() {
                    // console.log('sending info:');
                },
                success:function (d) {
                    // console.log('d:', d);
                }
            })
        }
        function checkCartCount(e) {
            axios.post(route('cartcount', true))
                .then(function (response) {
                    // console.log('response:', response.data);
                    $(v.cartCount).text(response.data)
                })
                .catch(function (error) {
                    console.log('error:', error);
                })
        }
        window.deleteRes = function (id){
            $.ajax({
                url:route('deleteres',id),
                type:'post',
                data:{"lesson_id":id},
                success:function (d) {
                    console.log('d:', d);
                }
            });
            $.ajax({
                url:route('lesson',course_id),
                type:"get",
                success:function (d) {
                    var toReplace = '#mymodal .modal-body';
                    var modalBody = $(toReplace);
                    console.log('mymodal:', $(d).find(toReplace));
                    modalBody.replaceWith($(d).find(toReplace))
                }
            })
        };



        // Events
        v.pasteBtn.on('click',function (e) {
            var code = $(e.target).parent().prev().children();
            var mce = tinymce.get("lesson");
            mce.execCommand('mceInsertContent', false, code.prop('outerHTML') );
        });
        v.deleteLesson.on('click',function () {
            v.currnetDel = $(this).parent().find("a");
            v.currnetDelHref = $(v.currnetDel).attr('href');
            v.currnetDelId = v.currnetDelHref.slice(-1);

            var sure = confirm('დარწმუნებული ხარ რომ გინდა წაშლა?');
            if (sure){
                del('deletelesson',v.currnetDelId,route('lesson',course_id));
            }
        });
        v.deleteCourse.on('click',function () {
            var sure = confirm('დარწმუნებული ხარ რომ გინდა წაშლა?');
            if (sure){
                var id = $(this).data('course-id');
                del('delete',id,route('dashboard'));
            } else {
                console.log('არ გინდა და როგორც გინდა')
            }
        });

        $('#mymodal').on('click','.study-edit',editResourcesFn );
        $('#mymodal').on('click','.study-save',editResourcesFn );
        $(document).on('click', v.shopIt, function (e) {
            var id = $(this).data('id');
            axios.post(route('add'),{id:id})
                .then(function (response) {
                    console.log('response data:', response.data);
                    checkCartCount(e)
                })
                .catch(function (error) {
                    console.log('error:', error);
                });
        });
        $(document).on('click', v.cartCount, checkCartCount);
        $(document).ready(checkCartCount)



    })(view);



 window.StudyOnline = {
        view:view,
     octopus:octopus,

 };

})(jQuery);