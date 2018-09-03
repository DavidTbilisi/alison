
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
            pasteBtn        : $('span.pointer.icon.study-paste'),
            deleteLesson    : $('.deleteLesson'),
            deleteCourse    : $('.deleteCourse'),

            mymodal         : $('#mymodal'),             //not dynamic;
            editResource    : $('#mymodal .study-edit'), //not dynamic;
            editName        : $('#mymodal [name=name]'), //not dynamic;
            editDesc        : $('#mymodal [name=desc]'), //not dynamic;
            deleteResource  : $('#mymodal .study-trash'),//not dynamic;

            courseNavigation: '.course-navigation',
            url:{
                baseUrl: location.origin + "/alison/public",
                routes : require('./routes.json'),
            }
        };
    })();


    var octopus = (function (v){
        console.dir(v.plugins.test);
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

        $('#mymodal').on('click','.study-edit',editResourcesFn );
        $('#mymodal').on('click','.study-save',editResourcesFn );
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
    })(view);



 window.StudyOnline = {
        view:view,
     octopus:octopus,

 };

})(jQuery);