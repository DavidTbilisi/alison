<div id="main-holder">
    <div class="login footerless-login">
        <div class="join-box register-box tab-wrapper login-page align-parent">
            <div class="align-center">
                <div id="login-container-element" class="login-container">
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
                    <div class="section-shadow"></div>
                </div>
            </div>
        </div>
    </div>
</div>


@if(count($errors)>0)
    <div title="დააკლიკეთ რომ გაქრეს" class="derrors" onclick="this.style.display = 'none'">
        <div class="alert alert-danger" style="left:125px">
            <ul>
                @foreach($errors->all() as $error)
                    <li>{{$error}}</li>
                @endforeach
            </ul>
        </div>
    </div>
@endif
