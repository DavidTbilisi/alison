<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'David',
            'lastname' => 'Chincharashvili',
            'email' => 'david@gmail.com',
            'password' => bcrypt(123),
            'remember_token' => '',
        ]);
    }
}
