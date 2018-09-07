<?php

namespace App\Providers;

use App\Helpers\BrowserConsole;
use App\Helpers\Contracts\Dconsole;
use function foo\func;
use Illuminate\Support\ServiceProvider;

class HelpDavidServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(Dconsole::class, function(){
            return new BrowserConsole();
        });
    }
}
