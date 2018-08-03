<?php

use Illuminate\Database\Seeder;

class categoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {


        DB::table('categories')->delete();

        DB::table('categories')->insert(
            [
                'id' => null,
                'root_id' => 0,
                'possition' => 1,
                'status' => 1,
                'title' => "it",
                'url' => "it",
                'navUrl' => "it",
                'color' => "it",
                'image' => "it",
            ]);
        DB::table('categories')->insert(
            [
                'id' => null,
                'root_id' => 1,
                'possition' => 1,
                'status' => 1,
                'title' => "Network and Security",
                'url' => "Network and Security",
                'navUrl' => "Network and Security",
                'color' => "Network and Security",
                'image' => "Network and Security",
            ]);

        DB::table('categories')->insert(
            [
                'id' => null,
                'root_id' => 1,
                'possition' => 1,
                'status' => 1,
                'title' => "Hardware",
                'url' => "Hardware",
                'navUrl' => "Hardware",
                'color' => "Hardware",
                'image' => "Hardware",
            ]);


        DB::table('categories')->insert(
            [
                'id' => null,
                'root_id' => 1,
                'possition' => 1,
                'status' => 1,
                'title' => "Software Development",
                'url' => "Software Development",
                'navUrl' => "Software Development",
                'color' => "Software Development",
                'image' => "Software Development",
            ]);

        DB::table('categories')->insert(
            [
                'id' => null,
                'root_id' => 1,
                'possition' => 1,
                'status' => 1,
                'title' => "Game Development",
                'url' => "Game Development",
                'navUrl' => "Game Development",
                'color' => "Game Development",
                'image' => "Game Development",
            ]);


        DB::table('categories')->insert(
            [
                'id' => null,
                'root_id' => 1,
                'possition' => 1,
                'status' => 1,
                'title' => "Software Tools",
                'url' => "Software Tools",
                'navUrl' => "Software Tools",
                'color' => "Software Tools",
                'image' => "Software Tools",
            ]);

        DB::table('categories')->insert(
            [
                'id' => null,
                'root_id' => 1,
                'possition' => 1,
                'status' => 1,
                'title' => "IT Management",
                'url' => "IT Management",
                'navUrl' => "IT Management",
                'color' => "IT Management",
                'image' => "IT Management",
            ]);


        DB::table('categories')->insert(
            [
                'id' => null,
                'root_id' => 1,
                'possition' => 1,
                'status' => 1,
                'title' => "Mobile Apps",
                'url' => "Mobile Apps",
                'navUrl' => "Mobile Apps",
                'color' => "Mobile Apps",
                'image' => "Mobile Apps",
            ]);

        DB::table('categories')->insert(
            [
                'id' => null,
                'root_id' => 1,
                'possition' => 1,
                'status' => 1,
                'title' => "Software Engineering",
                'url' => "Software Engineering",
                'navUrl' => "Software Engineering",
                'color' => "Software Engineering",
                'image' => "Software Engineering",
            ]);

        DB::table('categories')->insert(
            [
                'id' => null,
                'root_id' => 1,
                'possition' => 1,
                'status' => 1,
                'title' => "Data Science",
                'url' => "Data Science",
                'navUrl' => "Data Science",
                'color' => "Data Science",
                'image' => "Data Science",
            ]);


        DB::table('categories')->insert(
            [
                'id' => null,
                'root_id' => 1,
                'possition' => 1,
                'status' => 1,
                'title' => "Databases",
                'url' => "Databases",
                'navUrl' => "Databases",
                'color' => "Databases",
                'image' => "Databases",
            ]);


        DB::table('categories')->insert(
            [
                'id' => null,
                'root_id' => 1,
                'possition' => 1,
                'status' => 1,
                'title' => "Core IT Skills",
                'url' => "Core IT Skills",
                'navUrl' => "Core IT Skills",
                'color' => "Core IT Skills",
                'image' => "Core IT Skills",
            ]);


        DB::table('categories')->insert([
            'id' => null,
            'root_id' => 0,
            'possition' => 1,
            'status' => 1,
            'title' => "language",
            'url' => "language",
            'navUrl' => "language",
            'color' => "language",
            'image' => "language",
        ]);
        DB::table('categories')->insert([
            'id' => null,
            'root_id' => 0,
            'possition' => 1,
            'status' => 1,
            'title' => "science",
            'url' => "science",
            'navUrl' => "science",
            'color' => "science",
            'image' => "science",
        ]);
        DB::table('categories')->insert([
            'id' => null,
            'root_id' => 0,
            'possition' => 1,
            'status' => 1,
            'title' => "health",
            'url' => "health",
            'navUrl' => "health",
            'color' => "health",
            'image' => "health",
        ]);
        DB::table('categories')->insert([
            'id' => null,
            'root_id' => 0,
            'possition' => 1,
            'status' => 1,
            'title' => "humanities",
            'url' => "humanities",
            'navUrl' => "humanities",
            'color' => "humanities",
            'image' => "humanities",
        ]);
        DB::table('categories')->insert([
            'id' => null,
            'root_id' => 0,
            'possition' => 1,
            'status' => 1,
            'title' => "business",
            'url' => "business",
            'navUrl' => "business",
            'color' => "business",
            'image' => "business",
        ]);
        DB::table('categories')->insert([
            'id' => null,
            'root_id' => 0,
            'possition' => 1,
            'status' => 1,
            'title' => "math",
            'url' => "math",
            'navUrl' => "math",
            'color' => "math",
            'image' => "math",
        ]);
        DB::table('categories')->insert([
            'id' => null,
            'root_id' => 0,
            'possition' => 1,
            'status' => 1,
            'title' => "marketing",
            'url' => "marketing",
            'navUrl' => "marketing",
            'color' => "marketing",
            'image' => "marketing",
        ]);
        DB::table('categories')->insert([
            'id' => null,
            'root_id' => 0,
            'possition' => 1,
            'status' => 1,
            'title' => "lifestyle",
            'url' => "lifestyle",
            'navUrl' => "lifestyle",
            'color' => "lifestyle",
            'image' => "lifestyle",
        ]);
        DB::table('categories')->insert([
            'id' => null,
            'root_id' => 0,
            'possition' => 1,
            'status' => 1,
            'title' => "all categories",
            'url' => "categories",
            'navUrl' => "categories",
            'color' => "categories",
            'image' => "search-bar-categories",
        ]);

    }
}
