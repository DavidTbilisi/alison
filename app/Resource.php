<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Resource extends Model
{
    public static function byUserId($user_id, $course_id, $wantData = true)
    {
       $res = Resource::where('user_id',$user_id)->where('course_id',$course_id);
        if($wantData) {
            return $res->get();
        } else{
        return $res->exists();
        }
    }

}
