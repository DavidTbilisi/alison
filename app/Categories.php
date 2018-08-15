<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Categories extends Model
{
    protected $table = 'categories';
    protected $guarded = ['id'];
    public static function activeCategories()
    {
        return Categories::where('status', 1)->get();
    }

      public static function mainCatregories()
    {
        return Categories::where('root_id', 0)->get();
    }

    public static function subCategories($root_id)
    {
        return Categories::where('root_id', $root_id)->get();
    }

    public static function allCategories($root_id = 0)
    {
        $subCategories = Categories::subCategories($root_id);
            foreach ($subCategories as $key => $value){
//                echo ++$key. " " . ucfirst($value->title ). " <br>";
                $haveParent = Categories::where('root_id', $value->id)->exists();
                if ($haveParent) {
                    $all[] = ['item'=>$value, 'children' => Categories::allCategories($value->id)];
                }
                else $all[] = ['item'=>$value, 'children' => null];
            }
            if(isset($all)){
                return $all;
            }
            else{
                return false;
            }
    }
}
