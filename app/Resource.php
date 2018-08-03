<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Resource extends Model
{
    public static function byUserId($id)
    {
       return Resource::where('user_id',$id)->get();
    }

}
