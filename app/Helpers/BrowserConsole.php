<?php
/**
 * Created by PhpStorm.
 * User: dato
 * Date: 8/30/2018
 * Time: 10:47 AM
 */

namespace App\Helpers;
use App\Helpers\Contracts\Dconsole;
use Illuminate\Http\Request;

class BrowserConsole implements Dconsole
{
    public static function log($data, $context="PHP: "){
        echo "<script> console.log('{$context}', ".json_encode($data) .") </script>";
    }
    public static function ld($data, $context="PHP: "){
        echo "<script> console.log('{$context}', ".json_encode($data) .") </script>";
        die;
    }

}