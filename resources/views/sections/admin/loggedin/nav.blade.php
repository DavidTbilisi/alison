<header class=" loggedin ">
    <div class="header-inner clearfix">
        <div class="top-links clearfix">
            <div class="top-links-left">
            </div>
            <div class="top-links-right">
                <div class="lang link">
                    <a href="#" class="trigger">EN
                        <span class="icon-chevron-down"></span>
                    </a>
                </div>
                <ul class="dropdown-lang">
                    <div class="triangle"></div>
                    <div class="dropdown-lang-inner drop-shadow">
                        <li>
                            <a rel="alternate" hreflang="en" href="https://alison.com/en">
                                English
                            </a>
                        </li>
                        <li>
                            <a rel="alternate" hreflang="es" href="https://alison.com/es">
                                Spanish
                            </a>
                        </li>
                        <li>
                            <a rel="alternate" hreflang="fr" href="https://alison.com/fr">
                                French
                            </a>
                        </li>
                        <li>
                            <a rel="alternate" hreflang="it" href="https://alison.com/it">
                                Italian
                            </a>
                        </li>
                        <li>
                            <a rel="alternate" hreflang="pt-BR" href="https://alison.com/pt-BR">
                                Brazilian Portuguese
                            </a>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
        <div class="header-left">
            <div class="logo-container">
                <a href="{{route('home')}}" class="logo"><img
                            src="https://cdn01.alison-static.net/public/html/vendor/img/logo.svg" width="130"
                            height="29" alt="Free Online Courses, Classes and Tutorials"></a>
                <a href="{{route('home')}}" class="logo-short"><img
                            src="https://cdn01.alison-static.net/public/html/vendor/img/logo-short.svg" width="50"
                            height="33" alt="Free Online Courses, Classes and Tutorials"></a>
            </div>
            <div class="search-container ">
                <form method="GET" action="https://alison.com/courses" accept-charset="UTF-8">
                    <input maxlength="200" autocomplete="off" placeholder="Search for courses" id="autocomplete"
                           name="query" type="text">
                    <button type="submit" class="btn btn-warning btn-fla"><span class="icon-search"></span></button>
                </form>
            </div>
            <div class="clearfix"></div>
        </div>
        <div class="quick-menu-container">
            <ul class="clearfix slide-on-scroll">
                <li>
                    <a class="open-menu"
                       data-open="course-menu-container"
                       href="{{route('courses')}}"
                       title="Courses">
                        <span>Courses</span>
                        <span class="icon-chevron-down"></span>
                    </a>
                </li>
                <li>
                    <a class="open-menu"
                       data-open="categories-container"
                       href="{{route('courses')}}"
                       title="categories">
                        <span>categories</span>
                        <span class="icon-chevron-down"></span>
                    </a>
                </li>
                <li>
                    <a href="{{route('path')}}"
                       title="Learning Paths">
                        <span>Learning Paths</span>
                    </a>
                </li>
            </ul>
            <div class="wide-dd-container categories-container dd-menu">
                <div class="wide-dd-container-inner">
                    <ul>
                        <li class="it">
                            <a href="https://alison.com/courses/it" title="IT">
                                <span class="icon-category-it"></span><br>
                                <span class="check-label">IT</span>
                            </a>
                        </li>
                        <li class="language">
                            <a href="https://alison.com/courses/language" title="Language">
                                <span class="icon-category-language"></span><br>
                                <span class="check-label">Language</span>
                            </a>
                        </li>
                        <li class="science">
                            <a href="https://alison.com/courses/science" title="Science">
                                <span class="icon-category-science"></span><br>
                                <span class="check-label">Science</span>
                            </a>
                        </li>
                        <li class="health">
                            <a href="https://alison.com/courses/health" title="Health">
                                <span class="icon-category-health"></span><br>
                                <span class="check-label">Health</span>
                            </a>
                        </li>
                        <li class="humanities">
                            <a href="https://alison.com/courses/humanities" title="Humanities">
                                <span class="icon-category-humanities"></span><br>
                                <span class="check-label">Humanities</span>
                            </a>
                        </li>
                        <li class="business">
                            <a href="https://alison.com/courses/business" title="Business">
                                <span class="icon-category-business"></span><br>
                                <span class="check-label">Business</span>
                            </a>
                        </li>
                        <li class="math">
                            <a href="https://alison.com/courses/math" title="Math">
                                <span class="icon-category-math"></span><br>
                                <span class="check-label">Math</span>
                            </a>
                        </li>
                        <li class="marketing">
                            <a href="https://alison.com/courses/marketing" title="Marketing">
                                <span class="icon-category-marketing"></span><br>
                                <span class="check-label">Marketing</span>
                            </a>
                        </li>
                        <li class="lifestyle">
                            <a href="https://alison.com/courses/lifestyle" title="Lifestyle">
                                <span class="icon-category-lifestyle"></span><br>
                                <span class="check-label">Lifestyle</span>
                            </a>
                        </li>
                        <li class="All Categories">
                            <a href="https://alison.com/courses/categories" title="All Categories">
                                <span class="icon-search-bar-categories"></span><br>
                                <span class="check-label">All Categories</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="wide-dd-container course-menu-container dd-menu">
                <div class="wide-dd-container-inner">
                    <ul>
                        <li>
                            <a title="My Courses" href="{{route('dashboard')}}">
                                <span class="icon-Literature-Filled"></span><br>
                                <span>My Courses</span>
                            </a>
                        </li>
                        <li>
                            <a href="{{route('courses')}}" title="Courses">
                                <span class="icon-courses"></span><br>
                                <span>All Courses</span>
                            </a>
                        </li>
                        <li>
                            <a href="{{route('certificate')}}" title="Certificate Courses">
                                <span class="icon-certificate"></span><br>
                                <span>Certificate Courses</span>
                            </a>
                        </li>
                        <li>
                            <a href="{{route('diploma')}}" title="Diploma Courses">
                                <span class="icon-diploma-label"></span><br>
                                <span>Diploma Courses</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
        <div class="header-right">
            <a href="{{route('dashboard')}}" class="link sidebar-trigger">
                <div class="avatar-outer">
                    {{--<img class="avatar" src="#" alt="David Chincharashvili">--}}
                    <span class="avatar icon study-user-inverse" style="font-size: 30px; color:#0094c9;"></span>
                </div>
                <span>{{ucfirst(session('loggedin'))}}'s Profile </span>
            </a>
            <span class="hide-on-scroll">
            <a href="#" class="notifications" title="Notifications">
                {{--TODO: change url--}}
<span data-endpoint="https://api.alison.com/v0.1" class="number position update-notification-amount">0</span>
<span class="icon-bell-line"></span>
</a>
<a href="#" class="cart" title="Shop">
<span class="number position update-order-amount">0</span>
<span class="icon-cart"></span>
</a>
</span>
            <div class="dropdown-menu profile-menu dd-menu">
                <div class="triangle" ></div>
                <div class="dropdown-menu-inner profile-menu-inner drop-shadow">
                    <ul>
                        <li class="resume-study">
                            <a class="btn btn-large" href="https://alison.com/resume/courses" title="Resume Study">
                                <span class="resume-label">Resume Study</span>
                                <span class="icon-play"></span>
                            </a>
                        </li>
                        <li class="my-profile">
                            <a href="{{route("dashboard")}}" title="Dashboard">
                                {{ucfirst($all['user'][0]->name)}}
                                {{ucfirst($all['user'][0]->lastname)}}
                                <span>პროფილში გადასვლა</span>
                                <div class="arrow">»</div>
                            </a>
                        </li>
                        <li>
                            <a class="cancel-scroll" href="#">
                              შეძენილი კურსები
                            </a>
                        </li>
                        <li>
                            <a href="#" >
                                ატვირთული კურსები </a>
                        </li>
                        <li>
                            <a href="#" >
                                გადახდების ისტორია </a>
                        </li>
                        <li>
                            <a href="#">
                                დახმარება </a>
                        </li>
                        <li class="logout">
                            <a href="{{route('logout')}}" title="Logout">
                                <span>გამოსვლა</span>
                            </a>
                        </li>
                        <li class="social-menu">
                            <a href="https://www.facebook.com/AlisonCourses/" target="_blank" title="facebook">
                                <i class="icon-facebook-logo"></i>
                            </a>
                            <a href="https://twitter.com/AlisonCourses" target="_blank" title="Twitter">
                                <i class="icon-twitter2"></i>
                            </a>
                            <a href="https://www.linkedin.com/company/alison" target="_blank" title="Linkedin">
                                <i class="icon-linkedin-logo2"></i>
                            </a>
                            <a href="https://plus.google.com/117706847987097855722" target="_blank" title="Google+">
                                <i class="icon-google-plus"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <script> var reloadCart = true;</script>
            <div class="orders-popup dd-menu">
                <div class="triangle"></div>
                <div class="popup-spacer"></div>
                <div class="orders-popup-inner">
                    <div class="orders-popup-product">
                        <p>You have nothing in your cart. <br>Why not add something?</p>
                    </div>
                    <a class="btn btn-blue" href="https://alison.com/shop">Shop</a>
                </div>
            </div>
            <div class="order-amount-header" style="display: none">0</div>
        </div>
    </div>
</header>