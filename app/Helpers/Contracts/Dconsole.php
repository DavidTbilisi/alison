<?php
/**
 * Created by PhpStorm.
 * User: dato
 * Date: 8/30/2018
 * Time: 10:43 AM
 */

namespace App\Helpers\Contracts;
use Illuminate\Http\Request;


interface Dconsole
{
    public static function log($data, $context);
}