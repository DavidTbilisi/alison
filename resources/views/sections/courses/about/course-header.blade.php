<section id="course-header">
    <h1>
        <span class="left">{{$course[0]->name}}</span>
    </h1>
    <div class="student-amount">
        <span class="icon-student"></span>
        <span>Join 456,289 other students</span>
    </div>


    <div class="course-header-pane">
        <div class="image diploma header-image match-height" style="height: 518px;">
            <img src="https://cdn01.alison-static.net/courses/1266/alison_courseware_intro_1266.jpg"
                 alt="Diploma in Project Management - Revised 2017">
            <div class="social-buttons">
                <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Falison.com%2Fcourse%2Fdiploma-in-project-management-revised-2017"
                   target="_blank" rel="nofollow">
                    <i class="icon-facebook"></i>
                </a>
                <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Falison.com%2Fcourse%2Fdiploma-in-project-management-revised-2017&amp;text=Learn%20how%20to%20effectively%20plan%20a%20project%20and%20successfully%20implement%20the%20phases%20of%20a%20project%20using%20project%20management%20methodologies%20and%20tools.%20%40AlisonCourses"
                   target="_blank" rel="nofollow">
                    <i class="icon-twitter"></i>
                </a>
                <a href="https://plus.google.com/share?url=https%3A%2F%2Falison.com%2Fcourse%2Fdiploma-in-project-management-revised-2017"
                   target="_blank" rel="nofollow">
                    <i class="icon-google"></i>
                </a>
                <a href="http://www.linkedin.com/shareArticle?url=https%3A%2F%2Falison.com%2Fcourse%2Fdiploma-in-project-management-revised-2017&amp;mini=true"
                   target="_blank" rel="nofollow">
                    <i class="icon-linkedin"></i>
                </a>
            </div>
            <article class="features">
                <ul>
                    <li class="free">
                        <i class="icon-money"></i>
                        <p>Free Course</p>
                    </li>
                    <li class="publisher">
                        <a title="Advance Learning" href="https://alison.com/publisher/advance-learning"
                           class="publisher">
                            <i class="icon-book2"></i>
                            <p>Advance Learning</p>
                        </a>
                    </li>
                    <li>
                        <i class="icon-clock"></i>
                        <p>{{$course[0]->avg_duration}}</p>
                    </li>
                    <li>
                        <i class="icon-flashTesting"></i>
                        <p>Assessment</p>
                    </li>
                    <li>
                        <i class="icon-certificate"></i>
                        <p>Certification</p>
                    </li>
                    <li>
                        <a class="spotlight_link" href="https://alison.com/about/course-classification">
                            <i class="icon-management"></i>
                            <p>Workplace - Job Role Training - Level {{$course[0]->level}}</p>
                        </a>
                    </li>
                    <li>
                        <i class="icon-trophy"></i>
                        <p>250 Pts</p>
                    </li>
                    <li>
                        <i class="icon-responsive"></i>
                        <p>Responsive</p>
                    </li>
                    <li>
                        <i class="star icon-filled-star blue"></i>
                        <i class="star icon-filled-star blue"></i>
                        <i class="star icon-filled-star blue"></i>
                        <i class="star icon-filled-star blue"></i>
                        <i class="star icon-filled-star blue"></i>
                    </li>
                </ul>
            </article>
        </div>
        <article class="detailed-info match-height" style="height: 518px;">
            <ul class="tab-navbar">
                <li data-name="description" class="tab-title active">
                    <div>
                        <i class="icon-description"></i>
                        <span class="text">Description</span>
                    </div>
                </li>
                <li data-name="outcomes" class="tab-title">
                    <div>
                        <i class="icon-outcome"></i>
                        <span class="text">Outcome</span>
                    </div>
                </li>
                <li data-name="certification" class="tab-title">
                    <div>
                        <i class="icon-certificate"></i>
                        <span class="text">Certification</span>
                    </div>
                </li>
            </ul>
            <div class="wrapper">
                <ul class="tab-content">
                    <li id="description" class="tab active">
                        <div class="tab-holder text-justify scrollbar mCustomScrollbar _mCS_1">
                            <div id="mCSB_1" class="mCustomScrollBox mCS-3d mCSB_vertical mCSB_inside"
                                 style="max-height: none;" tabindex="0">
                                <div id="mCSB_1_container" class="mCSB_container"
                                     style="position:relative; top:0; left:0;" dir="ltr">{{$course[0]->description}}
                                </div>
                                <div id="mCSB_1_scrollbar_vertical"
                                     class="mCSB_scrollTools mCSB_1_scrollbar mCS-3d mCSB_scrollTools_vertical"
                                     style="display: block;">
                                    <div class="mCSB_draggerContainer">
                                        <div id="mCSB_1_dragger_vertical" class="mCSB_dragger"
                                             style="position: absolute; min-height: 70px; display: block; height: 99px; max-height: 210px; top: 0px;">
                                            <div class="mCSB_dragger_bar"
                                                 style="line-height: 70px;"></div>
                                        </div>
                                        <div class="mCSB_draggerRail"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li id="outcomes" class="tab">
                        <div class="tab-holder text-justify scrollbar mCustomScrollbar _mCS_2 mCS_no_scrollbar">
                            <div id="mCSB_2" class="mCustomScrollBox mCS-3d mCSB_vertical mCSB_inside"
                                 style="max-height: 220px;" tabindex="0">
                                <div id="mCSB_2_container"
                                     class="mCSB_container mCS_y_hidden mCS_no_scrollbar_y"
                                     style="position:relative; top:0; left:0;" dir="ltr">
                                    {{$course[0]->outcome}}

                                </div>
                                <div id="mCSB_2_scrollbar_vertical"
                                     class="mCSB_scrollTools mCSB_2_scrollbar mCS-3d mCSB_scrollTools_vertical"
                                     style="display: none;">
                                    <div class="mCSB_draggerContainer">
                                        <div id="mCSB_2_dragger_vertical" class="mCSB_dragger"
                                             style="position: absolute; min-height: 70px; top: 0px;">
                                            <div class="mCSB_dragger_bar"
                                                 style="line-height: 70px;"></div>
                                        </div>
                                        <div class="mCSB_draggerRail"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li id="certification" class="tab">
                        <div class="tab-holder text-justify scrollbar mCustomScrollbar _mCS_3 mCS_no_scrollbar">
                            <div id="mCSB_3" class="mCustomScrollBox mCS-3d mCSB_vertical mCSB_inside"
                                 style="max-height: 220px;" tabindex="0">
                                <div id="mCSB_3_container"
                                     class="mCSB_container mCS_y_hidden mCS_no_scrollbar_y"
                                     style="position:relative; top:0; left:0;" dir="ltr">

                                    {{$course[0]->certification}}

                                </div>
                                <div id="mCSB_3_scrollbar_vertical"
                                     class="mCSB_scrollTools mCSB_3_scrollbar mCS-3d mCSB_scrollTools_vertical"
                                     style="display: none;">
                                    <div class="mCSB_draggerContainer">
                                        <div id="mCSB_3_dragger_vertical" class="mCSB_dragger"
                                             style="position: absolute; min-height: 70px; top: 0px;">
                                            <div class="mCSB_dragger_bar"
                                                 style="line-height: 70px;"></div>
                                        </div>
                                        <div class="mCSB_draggerRail"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="moving-btn">
                <a href="https://alison.com/topic/learn/66913/learning-outcomes" class="lrg-btn"
                   title="Learning Outcomes">Start Now</a>
                <div class="section-shadow"></div>
            </div>
        </article>
        <div class="course-header-tags">
            <section id="tags" class="course-tags">
                <article class="listed-tags">
                    <i class="icon-tag"></i>
                    <ul>
                        <li><a href="https://alison.com/tag/management-professionas"
                               title="management professionas">management professionas</a></li>
                        <li><a href="https://alison.com/tag/management-professionals"
                               title="Management Professionals">Management Professionals</a></li>
                    </ul>
                </article>
            </section>
        </div>
    </div>
</section>
