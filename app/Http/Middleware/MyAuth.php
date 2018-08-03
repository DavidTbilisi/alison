<?php

namespace App\Http\Middleware;

use Closure;

class MyAuth
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
       // dump($request->session()->get('loggedin'));

        if ( ! ($request->session()->has('loggedin')) ){
            return redirect(route('login'));
        }
        return $next($request);
    }
}
