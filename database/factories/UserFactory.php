<?php

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\Courses::class, function (Faker $faker) {
    $parentCategories= ["Health", "Business", "Humanities", "IT", "Language", "Lifestyle", "Marketing", "Math", "Science"];
    $environment= ["academic","workpalce","personal development"];
    $name = $faker->randomElement($parentCategories);
    $env = $faker->randomElement($environment);
    $courseName = $faker->words(5, true);
    return [
        'id' => null,
    'republished_course_id' => $faker->numberBetween(0,2) ,
    'course_type_id' => $faker->numberBetween(0,1) ,
    'author_id' => $faker->numberBetween(1,3) ,
    'price' => $faker->numberBetween(10,30) ,
    'old_price' => $faker->numberBetween(10,30) ,
    "trending" => $faker->numberBetween(0,1) ,
    "responsive" => $faker->numberBetween(0,1) ,
    "avg_duration" => '2 - 5 საათამდე' ,
    "name" => $courseName ,
    "slug" => preg_replace("/ /","-", $courseName) ,
    "headline" => $faker->sentence ,
    "locale" => $faker->locale ,
    "rating" => $faker->numberBetween(1,3) ,
    "enrolled" => $faker->numberBetween(500,2000) ,
    "category_name" => $name ,
    "category_slug" => $name ,
    "certified" => $faker->numberBetween(50,1000) ,
    "description" => $faker->words(250, true) ,
    "outcome" => $faker->words(210, true) ,
    "certification" => $faker->words(200, true) ,
    "parent_category_name" => $name ,
    "parent_category_slug" => $name ,
    "root_category_name" => $name ,
    "root_category_slug" => $name ,
    "level" => $faker-> numberBetween(1,3),
    "environment" => $faker->word ,
    "courseImgUrl" => "https://picsum.photos/200/300/?".random_int(10,200),
    "points" => $faker-> randomDigit,
    ];
});
$factory->define(App\Cta::class, function (Faker $faker) {
    return [
        'id' => null,
        'status' => random_int(0,1),
        'link' => "$faker->url",
        'image' => "https://images.unsplash.com/photo-1503662549813-28954e75f215?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bbbde7fd89b0578d7b42390b54147aa3&auto=format&fit=crop&w=1350&q=80",
        'linkTitle' =>  $faker->sentence(3, true),
        'logoTitle' =>  $faker->sentence(3, true),

    ];
});
$factory->define(App\Resource::class, function (Faker $faker) {
    return [
        'id' => null,
        'user_id' => random_int(1,3),
        'course_id' => random_int(1,10),
        'type' => "image/jpeg",
        'name' => $faker->name,
        'desc' =>  $faker->sentence(random_int(3,5), true),
        'res_link' =>  "https://picsum.photos/400/500/?".random_int(10,200),
    ];
});
$factory->define(App\OneCourse::class, function (Faker $faker) {
    return [
        'id' => null,
        'course_id' => random_int(1,10),
        'user_id' => random_int(1,3),
        'title' => $faker->name,
        'position' => 1,
        'text' =>  $faker->sentence(random_int(3,5), true),
    ];
});
$factory->define(App\Cart::class, function (Faker $faker){
    return[
        'id' => null,
        'ip' => $faker->ipv4,
        'course_id' => random_int(1,10),
    ];
});