<?php

namespace App\Providers;

use Illuminate\Support\Facades\Blade;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;
use Log;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
        Schema::defaultStringLength(191);
        DB::listen(function($query) {
            // myLog($query->sql, "SQL: ");
        });

        Blade::directive('notLoggedIn', function () {
            return "<?php if (!session('loggedin')) { ?>";
        });
        Blade::directive('loggedIn', function () {
            return "<?php } else { ?>";
        });
        Blade::directive('endLoggedIn', function () {
            return "<?php } ?>";
        });

        Blade::directive('clog', function ($data, $context="PHP: ") {
            return "<script> console.log('{$context}', ".json_encode($data).") </script>";
        });
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
