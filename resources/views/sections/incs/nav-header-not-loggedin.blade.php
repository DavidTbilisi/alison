<header class=" not-loggedin ">
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
                            <a rel="alternate" hreflang="en" href="index.html">
                                English
                            </a>
                        </li>
                        <li>
                            <a rel="alternate" hreflang="es" href="es.html">
                                Spanish
                            </a>
                        </li>
                        <li>
                            <a rel="alternate" hreflang="fr" href="fr.html">
                                French
                            </a>
                        </li>
                        <li>
                            <a rel="alternate" hreflang="it" href="it.html">
                                Italian
                            </a>
                        </li>
                        <li>
                            <a rel="alternate" hreflang="pt-BR" href="pt-BR.html">
                                Brazilian Portuguese
                            </a>
                        </li>
                    </div>
                </ul>

            </div>
        </div>
        <div class="header-left">
            <div class="logo-container">
                <a href="{{route('home')}}" class="logo">
                    <img src="https://cdn01.alison-static.net/public/html/vendor/img/logo.svg" width="130" height="29"
                         alt="Free Online Courses, Classes and Tutorials">
                </a>
                <a href="index.html" class="logo-short">
                    <img src="https://cdn01.alison-static.net/public/html/vendor/img/logo-short.svg" width="50"
                         height="33"
                         alt="Free Online Courses, Classes and Tutorials">
                </a>
            </div>
            <div class="search-container ">
                <form method="GET" action="https://alison.com/courses" accept-charset="UTF-8">
                    <input maxlength="200" autocomplete="off" placeholder="Search for courses" id="autocomplete"
                           name="query" type="text">
                    <button type="submit" class="btn btn-warning btn-fla">
                        <span class="icon-search"></span>
                    </button>
                </form>
            </div>
            <div class="clearfix"></div>
        </div>
        <div class="quick-menu-container">
            <ul class="clearfix slide-on-scroll">
                <li>
                    <a class="open-menu" data-open="course-menu-container" href="courses.html" title="Courses">
                        <span>კურსები</span>
                        <span class="icon-chevron-down"></span>
                    </a>
                </li>
                <li>
                    <a class="open-menu" data-open="categories-container" href="courses/categories.html"
                       title="categories">
                        <span>კატეგორიები</span>
                        <span class="icon-chevron-down"></span>
                    </a>
                </li>
                <li>
                    <a href="{{route('path')}}" title="Learning Paths">
                        <span>Learning Paths</span>
                    </a>
                </li>
            </ul>


            <div class="wide-dd-container categories-container dd-menu">
                <div class="wide-dd-container-inner">
                    <ul>
                        @foreach($all["allCategories"] as $menu)

                            <li class="{{$menu['item']['title']}}">
                                <a href="courses/{{$menu['item']['url']}}.html" title="{{$menu['item']['title']}}">
                                    <span class="icon-category-{{$menu['item']['image']}}"></span>
                                    <br>
                                    <span class="check-label">{{ucfirst($menu['item']['title'])}}</span>
                                </a>
                            </li>

                        @endforeach
                    </ul>
                </div>
            </div>

            <div class="wide-dd-container shop-menu-container dd-menu">
                <div class="wide-dd-container-inner">
                    <ul>
                        <li class="active" data-tab="shop-certificates">
                            <a href="login.html" title="Certification">
                                <span class="icon-certificate"></span>
                                <br>
                                <span>Certification</span>
                            </a>
                        </li>
                        <li data-tab="shop-tshirts">
                            <a href="login.html?shop-tshirts" title="T-shirts">
                                <span class="icon-tshirt"></span>
                                <br>
                                <span>T-shirts</span>
                            </a>
                        </li>
                        <li data-tab="shop-attestation">
                            <a href="login.html?shop-attestation" title="Attestations">
                                <span class="icon-flashTesting"></span>
                                <br>
                                <span>Attestations</span>
                            </a>
                        </li>
                        <li data-tab="shop-adsfree">
                            <a href="login.html?shop-premium" title="Premium">
                                <span class="icon-upgrade"></span>
                                <br>
                                <span>Premium</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="wide-dd-container course-menu-container dd-menu">
                <div class="wide-dd-container-inner">
                    <ul>
                        <li>
                            <a href="{{route('courses')}}" title="Courses">
                                <span class="icon-courses"></span>
                                <br>
                                <span>ყველა კურსი</span>
                            </a>
                        </li>
                        <li>
                            <a href="{{route('certificate')}}" title="Certificate Courses">
                                <span class="icon-certificate"></span>
                                <br>
                                <span>Certificate Courses</span>
                            </a>
                        </li>
                        <li>
                            <a href="{{route("diploma")}}" title="Diploma Courses">
                                <span class="icon-diploma-label"></span>
                                <br>
                                <span>Diploma Courses</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
        <div class="header-right not-logged-in">
            <div class="login-links">
                <a href="{{route("register")}}" class="link btn btn-large btn-blue">
                    რეგისტრაცია </a>
                <a href="{{route('login')}}" class="link login-button">
                    <span class="text">შესვლა</span>
                </a>
            </div>
        </div>
    </div>
</header>

