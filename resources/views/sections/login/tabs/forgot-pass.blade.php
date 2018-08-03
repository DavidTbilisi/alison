

<h3>Forgot password?</h3>
@if(!strpos(url()->current(), 'login' ))
    <div class="close-modal"><span class="icon-cross2"></span></div>
@endif
    <div class="form-group">
        <div class="content-pw">
            <img src="https://cdn01.alison-static.net/public/html/site/img/login-password-illustration.png" width="85" height="102" alt="Forgot your password?">
            <p>
                We will send your password reset
                instructions to your associated address.
                Please enter your current email.
            </p>
        </div>
        <form method="POST"
              action="{{route('reset')}}"
              accept-charset="UTF-8"
              data-forgot-form=""
              name="forgot-password-form">

           {{csrf_field()}}

            <div class="input-field icon-envelope ">
                <input class="form-control"
                       placeholder="Email address"
                       required=""
                       name="email"
                       type="email">
            </div>

            <input class="submit-login" type="submit" value="Reset my password">


            <ul id="login-buttons" class="tab-navbar">
                <li class="signup-account tab-title" data-name="login">
                    <a href="#">Back to login</a>
                </li>
            </ul>
        </form>
    </div>
