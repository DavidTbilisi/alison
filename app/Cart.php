<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Cart extends Model
{
    //
    protected $guarded  = ["id"];


    public static function get($customer_id, $course_id = null)
    {
$cart = DB::table('carts')
    ->join('courses', 'courses.id','=', 'carts.course_id')
    ->join('users', 'users.id','=', 'carts.user_id')
    ->select(
        'courses.author_id',
        'courses.id as course_id',
        'users.id as user_id',
        'courses.price',
        'courses.avg_duration',
        'courses.name'
        )
    ->where('users.id',$customer_id);
        if ($course_id != null) {
            $cart->where('courses.id',$course_id);
        }
    return $cart->distinct()->get();
    }




}
