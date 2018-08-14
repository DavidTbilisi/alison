<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCoursesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
//        Schema::create('courses', function (Blueprint $table) {
//            $table->increments('id');
//            $table->integer('level');
//            $table->integer('status');
//            $table->string('name',250);
//            $table->text('description');
//            $table->string('moreInfoLink', 250);
//            $table->string('resumeLink', 250);
//            $table->string('image', 250);
//            $table->string('category', 150);
//            $table->string('type', 100);
//            $table->string('tag',250);
//            $table->string('duration', 50);
//            $table->string('features', 50);
//            $table->string('learningarea', 100);
//            $table->timestamps();
//        });

        Schema::create('courses', function (Blueprint $table){
            $table->increments('id');
            $table->integer('republished_course_id')->nullable();
            $table->integer('course_type_id');
            $table->integer('author_id');
            $table->integer('price');
            $table->integer("trending")->nullable();
            $table->integer("responsive")->nullable();
            $table->string("avg_duration", 50)->nullable();
            $table->string("name",150);
            $table->string("slug",150);
            $table->string("headline",150)->nullable();
            $table->string("locale",50)->default('ka');
            $table->integer("rating")->default(1);
            $table->integer("enrolled")->default(1);
            $table->text("outcome")->nullable();
            $table->text("certification")->nullable();
            $table->text("description");
            $table->string("category_name",100);
            $table->string("category_slug",100);
            $table->integer("certified")->nullable();
            $table->string("parent_category_name",100);
            $table->string("parent_category_slug",100);
            $table->string("root_category_name",100);
            $table->string("root_category_slug",100);
            $table->integer("level")->nullable();
            $table->string("environment",100)->nullable();
            $table->string("courseImgUrl",250);
            $table->integer("points")->nullable();
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('courses');
    }
}
