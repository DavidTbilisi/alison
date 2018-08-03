<?php

use Illuminate\Database\Seeder;

class OneCourse extends Seeder
{

    public function run()
    {
        factory(App\OneCourse::class, 10)->create();
    }
}
