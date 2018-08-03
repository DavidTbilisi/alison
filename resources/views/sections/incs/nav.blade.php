<div class="loading">
    <img src="{{asset('assets/images/loader.gif')}}" width="208" height="208" alt="Loading">
</div>
<div class="loading-cart">
    <div class="loading-cart-inner">
        <img width="100px" height="161px" src="{{asset('assets/images/cart.gif')}}" width="100" height="161"
             alt="Loading">
    </div>
</div>
<div class="messages-q">
</div>
<div class="cookie-banner">
    <div class="cookie-wrapper text-center">
        <div class="outer-wrap">
            <div class="inner-wrap">
                <div class="insert text-center">
                    We use cookies to improve your experience on Alison.com. Please read our
                    <a class="cookie-policy cancel-scroll"
                       href="pt-BR/about/terms-of-use18d7.html?privacy-policy#alison_cookie_policy" target="_blank">cookie
                        policy</a> for more information about how we use cookies.
                </div>
                <a href="#" class="close">
                    <span class="icon-cross"></span>
                </a>
            </div>
        </div>
    </div>
</div>
@if(!(session('loggedin')))
@include('sections.incs.nav-header-not-loggedin')
    @else
@include('sections.admin.loggedin.nav')
    @endif

@if(count($errors)>0)
    <div title="დააკლიკეთ რომ გაქრეს" class="derrors" onclick="this.style.display = 'none'" style="top:10%">
        <div class="alert alert-danger" >
            <ul>
                @foreach($errors->all() as $index=>$error)
                    <li>{{$error}}</li>
                    {{session([$index=>$error])}}
                @endforeach
            </ul>
        </div>
    </div>
@endif