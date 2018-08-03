<h1>Sign In</h1>
@if(!strpos(url()->current(), 'login' )  )
<div class="close-modal"><span class="icon-cross2"></span></div>
@endif
<div class="wide-line"></div>

<h4 class="login_info_h4">Social Media Login</h4>
<div class="icon-group">
    <a href="/auth/facebook" rel="nofollow">
<span class="icon-facebook">
<span class="circle-facebook">
<span class="round"></span>
</span>
</span>
    </a>
    <a href="/auth/google" rel="nofollow">
        <span class="icon-google">
            <span class="circle-google">
                <span class="round"></span>
            </span>
        </span>
    </a>
    <a href="/auth/yahoo" rel="nofollow">
    <span class="icon-yahoo">
        <span class="circle-yahoo">
            <span class="round"></span>
        </span>
    </span>
    </a>
    <a href="/auth/live" rel="nofollow">
        <span class="icon-windows">
            <span class="circle-windows">
                <span class="round"></span>
            </span>
        </span>
    </a>
    <a href="/auth/linkedin" rel="nofollow">
        <span class="icon-linkedin">
            <span class="circle-linkedin">
                <span class="round"></span>
            </span>
        </span>
    </a>
</div>
<div class="clearfix"></div>
<div class="or-line">
    <span>OR</span>
</div>
<div class="form-group">
    <form method="POST" action="{{route('login')}}" accept-charset="UTF-8" data-login-form=""
          name="login-form">
        {{csrf_field()}}
        <div class="input-field icon-envelope ">
            <input class="form-control" placeholder="Email address" required="" name="email" type="email">
        </div>
        <div class="input-field icon-lock ">
            <input class="form-control" placeholder="Password" required="" name="password" type="password" value="">
        </div>
        <p class="half-width">
            <input id="remember" name="remember" type="checkbox">
            <label for="remember" class="form-checkbox">Keep me logged in</label>
        </p>
        <ul class="half-width">
            <li data-name="forgotpassword" class="form-link tab-title">
                <a href="#">Forgot password?</a>
            </li>
        </ul>
        <div class="errors">
            <ul>
            </ul>
        </div>
        <input class="submit-login" type="submit" value="Log In">
        <ul id="login-buttons" class="tab-navbar">
            <li class="signup-account switch-tab">
                Don't have an Alison account? <a href="{{route('register')}}">Register</a>
            </li>
        </ul>
    </form>
</div>
