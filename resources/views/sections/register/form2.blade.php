<div class="form-group email-signup slide-on-social">
    <form method="POST"

          @notLoggedIn
          action="{{route('register')}}"
          @loggedIn
          action="{{route('setNewPassword')}}"
          @endLoggedIn
          accept-charset="UTF-8"
          data-signup-form
          id="signup-form"
          name="register-form">

        {{csrf_field()}}
        <div class="input-field icon-user ">
            <input class="form-control"
                   id="firstName"
                   placeholder="First Name"
                   required name="firstname"
                   value="{{@$all['user'][0]->name}}"
                   type="text">
        </div>
        <div class="input-field icon-user ">
            <input class="form-control"
                   id="lastName"
                   placeholder="Last Name"
                   value="{{@$all['user'][0]->lastname}}"
                   required name="lastname"
                   type="text">
        </div>
        <div class="input-field-email icon-envelope ">
            <input class="form-control"
                   id="emailNew"
                   placeholder="E-mail"
                   value="{{@$all['user'][0]->email}}"
                   required name="signup_email"
                   type="email">
        </div>
        <div class="input-field icon-lock ">
            <input class="form-control"
                   id="signup_password"
                   placeholder="Password"
                   required name="signup_password"
                   value="{{old('signup_password')}}"
                   type="password"
                   value="">
        </div>
        @notLoggedIn
        <div class="input-field icon-lock ">
            <input class="form-control"
                   id="confirmPassword"
                   placeholder="Confirm Password"
                   name="signup_password_confirmation"
                   value="{{old('signup_password_confirmation')}}"
                   type="password">
        </div>
        <div class="hide-on-social">
            <p class="terms-conditions">
                <input id="signup_tc" name="signup_tc" type="checkbox">
                <label for="signup_tc" class="form-checkbox tc-check">
                    I agree to the
                    <a href="#" target="_blank">Terms and Conditions</a>
                </label>
                <br/>
                <input name="signup_emails" type="hidden" value="1">
            </p>
            <input class="submit-login signup-button"
                   type="submit" value="რეგისტრაცია">

            <ul id="login-buttons" class="tab-navbar">
                <li class="signup-account login-account switch-tab">
                    Already have an Alison account?
                    <a href="{{route('login')}}"> Log In </a>
                </li>
            </ul>
            @loggedIn
            {{-- todo: bind with db --}}
            <div class="input-field icon-lock ">
                <input class="form-control"
                       id="new_password"
                       placeholder="New Password"
                       name="new_password"
                       type="password"
                       value="{{ old('new_password') }}">
            </div>
            <input class="submit-login signup-button"
                   type="submit" value="შენახვა">
            @endLoggedIn
        </div>
    </form>
</div>
