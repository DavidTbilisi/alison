<?php
/**
 * Created by PhpStorm.
 * User: dato
 * Date: 8/30/2018
 * Time: 10:47 AM
 */

namespace App\Helpers;
use App\Helpers\Contracts\David_i;
use Illuminate\Http\Request;

class BrowserConsole implements David_i
{
    public static function log($data, $context="PHP: "){
        $obj = new self();
        echo "<script> console.log('{$context}', ".json_encode($data) .") </script>";
    }

}