<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Cart extends Model
{
    //
    protected $guarded  = ["id"];


    public static function get($customer_id)
    {
$cart = DB::table('carts')
    ->join('courses', 'courses.id','=', 'carts.course_id')
    ->join('users', 'users.id','=', 'carts.user_id')
    ->select('courses.author_id','courses.name', 'courses.price','courses.avg_duration')
    ->where('users.id',$customer_id)
    ->get();
    return $cart->unique($cart);

    }




}
