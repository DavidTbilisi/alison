<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OneCourse extends Model
{
    public static function byUserId($id,$course_id=0,$lesson_id = 0)
    {

        dump('user_id:',$id);
        dump('course_id:',$course_id);
        $course = OneCourse::where('user_id', $id);
        $lesson_id !== 0? $course->where('id', $lesson_id):'';
        $course_id !== 0? $course->where('course_id', $course_id) :'';
        return $course->orderBy('position','desc')->get();
    }

    public static function addLesson($title,$text,$position) {
        OneCourse::insert([]);
    }

    public static function editLesson($id) {
        $course = OneCourse::where('id', $id)->get();
        $course->save();
        return $course;
    }
    public static function deleteLesson($id) {
        OneCourse::where('id',$id)->delete();
    }
}
