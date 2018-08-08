<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OneCourse extends Model
{
    public static function byUserId($id,$lesson_id = 0)
    {
        $course = OneCourse::where('user_id', $id);
        if($lesson_id !== 0) {
            $course ->where('id', $lesson_id);
        }
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
