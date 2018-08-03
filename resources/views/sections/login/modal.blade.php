<ul class="tab-content">
    <li id="login" class="tab" style="display: none;">
        @include('sections.login.tabs.login')
    </li>
    <li id="signup" class="tab active" style="">
        @include("sections.login.tabs.singup")
    </li>
    <li id="forgotpassword" class="tab" style="/* display: none; */">
        @include('sections.login.tabs.forgot-pass')
    </li>
</ul>