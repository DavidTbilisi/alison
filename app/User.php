<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];
// this user has many courses
// is author of may courses
    public function courses()
    {
     return $this->hasMany(Courses::class, 'author_id');
    }
// this user has many resources
    public function resource()
    {
     return $this->hasMany(Resource::class, 'user_id');
    }
}
