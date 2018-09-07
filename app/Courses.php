<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Courses extends Model
{
  protected $table = 'courses';

    public static function coursesDesc( $order,
                                        $arrCategories = 0,
                                        $arrType = null,
                                        $arrEnvironment = 0,
                                        $arrLevel = 0,
                                        $arrDuration = 0,
                                        $arrFeature = 0
)
    {
        $query =  self::raw('1=1');
        if( is_array($arrCategories) && isset($arrCategories[0]) ) {

            $query->where(function($q) use ($arrCategories) {
                $q->where( "root_category_slug", $arrCategories[0])
                    ->orWhere( "parent_category_slug", $arrCategories[0]);
                for($counter = 1; $counter < count($arrCategories);$counter++) {
                    $q->orWhere( "root_category_slug", $arrCategories[$counter])
                        ->orWhere( "parent_category_slug", $arrCategories[$counter]);
                }
            });

        }
        if($arrType !== null) {
            $query->where( "course_type_id", $arrType)
                ->orderBy($order, 'desc')->get();
        }
        return $query->orderBy($order, 'desc')->get();
    }


    public static function activeCoursesBySlug($slug)
    {
        if(Courses::where('slug',$slug)->exists()){
            return Courses::where('slug',$slug)->get();
        }
        return null;
    }

    public function user()
    {
        return $this->belongsTo(User::class, "id");
    }

    public function resource()
    {
        return $this->hasMany(Resource::class, "course_id");

    }

    public function cart () {
        return $this->belongsto(Cart::class, 'course_id', 'id');
    }
}
