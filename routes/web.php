<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', ['as'=>'home','uses'=>'HomeController@index']);
Route::get('/addCategory', ['as'=>'addCategory','uses'=>'HomeController@addCategory']);
Route::get('/search', ['as'=>'search','uses'=>'HomeController@search']);

Route::match(['get','post'],'/login', ['as'=>'login','uses'=>'HomeController@login']);
Route::match(['get','post'],'/register', ['as'=>'register','uses'=>'HomeController@register']);
Route::match(['get','post'],'/reset',['as' => 'reset', 'uses' => 'HomeController@sendMail']);

Route::group([ 'prefix' => '/courses'],function (){
    Route::get('/', ['as'=>'courses','uses'=>'HomeController@allcourses']);
    Route::get('/certificate', ['as' => 'certificate','uses' => 'HomeController@allcourses']);
    Route::get('/diploma', ['as'=>'diploma','uses'=>'HomeController@allcourses']);
    Route::get('{name?}', ['as'=>'about','uses'=>'HomeController@aboutCourse']);
});
Route::group([ 'prefix' => '/learning-path'], function(){
    Route::get('/', ['as'=>'path','uses'=>'HomeController@learningPath']);
    Route::get('{name?}', ['as'=>'pathName','uses'=>'HomeController@learningPathName']);
});
Route::group([ 'prefix' => '/admin', 'middleware' => 'MyAuth'], function(){
    Route::get('/', ['as'=>'dashboard','uses'=>'HomeController@dashboard']);
    Route::match(['get','post'],'/setnewpassword', ['as'=>'setNewPassword','uses'=>'HomeController@setNewPassword']);
    Route::match(['get','post'],'/logout',['as'=>'logout','uses'=>'HomeController@logout']); // logout
    Route::group([ 'prefix' => '/courses'], function (){
        Route::match(['get','post'],'/',['as'=>'admincourses','uses'=>'HomeController@course']); // admincourses
        Route::match(['get','post'],'/add',['as'=>'addcourse','uses'=>'HomeController@addCourse']); // addcourse
        Route::match(['get','post'],'/edit/{id}',['as'=>'edit','uses'=>'HomeController@editCourse']); // edit
        Route::match(['get','post'],'/delete/{id}',['as'=>'delete','uses'=>'HomeController@deleteCourse']); // delete

        Route::match(['get','post'],'{course_id}/lesson/{id?}',['as' => 'lesson', 'uses' => 'HomeController@lesson']);
        Route::match(['get','post'],'addlesson/',['as' => 'addlesson', 'uses' => 'HomeController@addLesson']);
        Route::match(['get','post'],'editlesson/{id?}',['as' => 'editlesson', 'uses' => 'HomeController@editLesson']);
        Route::match(['get','post'],'deletelesson/{id?}',['as' => 'deletelesson', 'uses' => 'HomeController@deleteLesson']);
    });
});





