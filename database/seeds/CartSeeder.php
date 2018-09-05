<?php

use Illuminate\Database\Seeder;

class CartSeeder extends Seeder
{
    public function run()
    {
        factory(App\Cart::class, 10)->create();
    }
}
