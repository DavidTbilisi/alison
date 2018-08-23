
<div id="main-holder">
    <div class="login footerless-login">
        <div class="join-box tab-wrapper login-page align-parent">
            <div class="align-center">
                <div id="login-container-element" class="login-container">

                    @include('sections.errors')

                    <ul class="tab-content">
                        <li id="login" class="tab active">
                            @include('sections.login.tabs.login')
                        </li>
                        <li id="signup" class="tab "  style="display: none;">
                            @include("sections.login.tabs.singup")
                        </li>
                        <li id="forgotpassword" class="tab"  style="display: none;">
                            @include('sections.login.tabs.forgot-pass')
                        </li>
                    </ul>
                    <div class="section-shadow"></div>
                </div>
            </div>
        </div>
    </div>
</div>