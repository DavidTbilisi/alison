<h1>შემოგვიერთდით</h1>
@if(!strpos(url()->current(), 'login' ) && !strpos(url()->current(), 'register' ))

<div class="close-modal"><span class="icon-cross2"></span></div>
@endif

<span class="sub-msg">The World’s Largest Free Learning Community</span>
<div class="wide-line"></div>
<h4 class="login_info_h4">ავტორიზაცია სოციალური მედიის საშუალებით</h4>
<div class="icon-group clearfix">
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
<div class="or-line slide-on-social">
    <span>OR</span>
</div>

@include('sections.register.form2')

<div class="form-group social-signup" style="display: none">
    <form method="POST" action="{{route('home')}}" accept-charset="UTF-8" social-form
          id="social-form" name="social-form">
   {{csrf_field()}}
        <p class="terms-conditions">
            <input id="signup_tc_social" name="signup_tc_social" type="checkbox">
            <label for="signup_tc_social" class="form-checkbox tc-check">
                I agree to the
                <a href="https://alison.com/about/terms-of-use"
                   target="_blank">
                    Terms and Conditions
                </a>
            </label>

            <br/>

            <input name="signup_emails_social" type="hidden" value="1">
            <input class="submit-login signup-button" type="submit" value="რეგისტრაცია">
        <ul id="login-buttons-social"
            class="tab-navbar">
            <li class="signup-account login-account switch-tab">
                Already have an Alison account?
                <a href="{{route('login')}}">Log In</a>
            </li>
        </ul>
    </form>
    </p>
</div>

