<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    public function courses()
    {
        return $this->hasMany(Courses::class, 'id');
    }

    public function showCart()
    {
        Cart::where('ip',request()->ip())
            ->join()
            ->get();
    }
}
