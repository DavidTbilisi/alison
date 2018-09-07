<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    public function courses()
    {
        return $this->hasMany(Courses::class, 'id', 'course_id');
    }


    public static function getAll($count = null)
    {
        $data = Cart::where('ip',request()->ip())->get();
        if(!count($data) ):
            return '0';
        endif;
        foreach ($data as $cart){


            $collection[] = $cart->courses;
        }
        $collection = array_collapse($collection) ;
        if ($count == null) {
            return $collection;
        } else {
            return count($collection);
        }
    }
}
