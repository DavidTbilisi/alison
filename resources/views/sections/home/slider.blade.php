<section class="two-columns-wide-outer viewport">
            <div class="two-columns-wide-wrapper wrapper">
                <div class="row columns-wrapper">
                    <div class="home-left-column col-md-6 match-height">
                        <div class="home-left-column-insert">
                            <h2>Empower Yourself</h2>
                            <h1>
                                <span>Free online courses</span> from the world’s leading experts.</h1>
                            <p> Join 12 million learners today.</p>
                            <div class="clearfix"></div>
                            <a href="register.html" class="btn btn-blue home-column-call-to-action cta-signup btn-green">Sign up now</a>
                            <span class="signup-or">or</span>
                            <a href="courses.html" class="btn btn-ghost home-column-call-to-action cta-login">View courses</a>
                        </div>
                    </div>
                    <div class="home-right-column col-md-6 match-height text-center">
                        <div class="home-right-column-insert">
                            <div class="row">
                                <div class="categories-gradient"></div>
                                <div class="text-center home-column-category-item">
                                    <div class="card">
                                        <a href="courses/it.html">
                                            <div class="front">
                                                <span class="home-cat-icon technology-color icon-category-it"></span>
                                                <p class="home-category-heading">Technology</p>
                                                <div class="border technology-color"></div>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                                @foreach($all["allCategories"] as $menu)
                                    @php
                                    if ($menu['item']['title'] == 'it' || $menu['item']['title'] == 'all categories'  ) {
                                    continue;
                                    }
                                    @endphp
                                    <div class="text-center home-column-category-item">
                                        <div class="card">
                                            <a href="courses/{{$menu['item']['url']}}.html">
                                                <div class="front">
                                                    <span class="home-cat-icon {{$menu['item']['color']}}-color icon-category-{{$menu['item']['image']}}"></span>
                                                    <p class="home-category-heading">{{ucfirst($menu['item']['url'])}}</p>
                                                    <div class="border {{$menu['item']['color']}}-color"></div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                @endforeach

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
