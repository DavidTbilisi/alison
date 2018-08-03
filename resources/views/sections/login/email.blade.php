<form method="POST" action="https://alison.com/password/email" accept-charset="UTF-8"
      data-forgot-form name="forgot-password-form">
   {{csrf_field()}}
    <div class="input-field icon-envelope ">
        <input class="form-control" placeholder="Email address" required name="email"
               type="email">
    </div>
    <input class="submit-login" type="submit" value="Reset my password">
    <ul id="login-buttons" class="tab-navbar">
        <li class="signup-account tab-title" data-name="login">
            <a href="#">Back to login</a>
        </li>
    </ul>
</form>