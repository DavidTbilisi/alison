<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OneCourse extends Model
{
    public static function byUserId($id,$course_id=0,$lesson_id = 0)
    {
//        dump('user_id:',$id);
//        dump('course_id:',$course_id);
        $course = OneCourse::where('user_id', $id);
        $lesson_id !== 0? $course->where('id', $lesson_id):'';
        $course_id !== 0? $course->where('course_id', $course_id) :'';
        return $course->orderBy('position','desc')->get();
    }
    public static function isLessonsInCourse($user_id, $course_id, $wantBool=true) {
        $course = OneCourse::where('user_id', $user_id)
            ->where('course_id',$course_id);
        if($wantBool){
            return $course->exists();
        } else{
            return $course->get();
        }


    }
}
