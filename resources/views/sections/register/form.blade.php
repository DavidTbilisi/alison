<div class="form-group">
    <form method="POST"
          action="{{route('register')}}"
          accept-charset="UTF-8"
          data-login-form
          name="login-form">
        <!-- ეს არ ვიცი სად -->
        <div class="input-field icon-envelope ">
            {{ csrf_field() }}
            <input class="form-control"
                   placeholder="Email address"
                   required name="email"
                   type="email">
        </div>
        <div class="input-field icon-lock ">
            <input class="form-control"
                   placeholder="Password"
                   required name="password"
                   type="password"
                   value="">
        </div>
        <p class="half-width">
            <input id="remember"
                   name="remember"
                   type="checkbox">
            <label for="remember"
                   class="form-checkbox">Keep me logged in</label>
        </p>
        <ul class="half-width">
            <li data-name="forgotpassword"
                class="form-link tab-title">
                <a href="#">Forgot password?</a>
            </li>
        </ul>
        <div class="errors">
            @if(count($errors)>0)
                <div title="click to dismis" class="derrors" onclick="this.style.display = 'none'">
                    <div class="alert alert-danger">
                        <ul>
                            @foreach($errors->all() as $error)
                                <li>{{$error}}</li>
                            @endforeach
                        </ul>
                    </div>
                </div>
            @endif
        </div>
        <input class="submit-login"
               type="submit"
               value="Log In">
        <ul id="login-buttons"
            class="tab-navbar">
            <li class="signup-account switch-tab">
                Don't have an Alison account?
                <a href="{{route('login')}}">რეგისტრაცია</a>
            </li>
        </ul>
    </form>
</div>
