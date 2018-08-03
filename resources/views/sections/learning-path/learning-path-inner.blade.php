<div id="main-holder">
    <div class="banner-container ">
        <div class="banner">
            <div class="banner-align align-parent">
                <div class="align-center">
                    <div class="wrapper">
                        <div class="inline-container learning-path-container">
                            <div class="inline icon-widget">
                                <span class="icon-clock"></span>
                                <p>10-12 Hours</p>
                            </div>
                            <div class="inline">
                                <div class="circle-image learning-path-image">
                                    <img id="learning_path_image" src="https://cdn01.alison-static.net/learning_paths/27/alison_learning_path_27.jpg" alt="Accounting - Core Concepts">
                                </div>
                            </div>
                            <div class="inline icon-widget">
                                <span class="icon-trophy"></span>
                                <p>300 Points</p>
                            </div>
                        </div>
                        <h1 class="learning-path-name">{{ucfirst($name)}} - Core Concepts</h1>
                        <div class="stars " data-fill="5" data-path="learning-path">
                            <span data-line="I did not like it!" class="icon-filled-star"></span>
                            <span data-line="It was okay!" class="icon-filled-star"></span>
                            <span data-line="Much Liked!" class="icon-filled-star"></span>
                            <span data-line="Very Enjoyable!" class="icon-filled-star"></span>
                            <span data-line="Highly Recommended!" class="icon-filled-star"></span>
                            <p>5
                                stars based
                                on 142
                                votes</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="about-learning-path about-first">
        <div class="wrapper">
            <div class="row">
                <div class="col-md-12">
                    <h2>{{ucfirst($name)}} - Core Concepts Learning Path</h2>
                    <p></p>
                    <p>Accounting involves collecting, organizing and interpreting financial data in order to produce financial statements. It is hugely important for dealing with the finances of a business. By studying the Alison Learning Path in Accounting – Core Concepts you will learn about the accounting process. You will learn about accounting principles, concepts, procedures and structures that accountants follow on a daily basis. The Alison Learning Path in Accounting – Core Concepts is a series of courses that will give you an overview of the role of an accountant and inform you on different areas of the accounting process.</p>
                    <p></p>
                    <br>
                </div>
            </div>
        </div>
    </div>
    <br>
    <div class="about-learning-path">
        <div class="wrapper">
            <div class="row">
                <div class="col-md-12">
                    <h3>Courses in this Learning Path</h3>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <div class="path-list">
                <div class="wrapper">
                    <ol>
                        {{--todo: ajax here--}}
                        @foreach(range(1,4) as $li)
                        <li>
                            <div class="path-holder">
                                <div class="col-md-6 lp-desc">
                                    <div class="top">
                                        <h4>Fundamentals of Accounting</h4>
                                    </div>
                                    <div class="body">
                                        <div class="desc match-height" style="">
                                            <p class="text-justify more longtext"></p><p>Using an interactive presentation style, Alison's accounting course dives into the terminology employed in financial circles, the principles used in basic accounting and the systems put in place to ensure financial control is maintained. The accounting course explores the main financial statements including the profit and loss account, the balance sheet and the everyday adjustments that have to be made. After completing the accounting course, you are expected to be aware of the importance of prudential financial management and the factor it plays in the success or failure of businesses and organizations.</p><p></p>
                                        </div>
                                    </div>
                                    <div class="lp-course-info">
                                        <div class="duration">
                                            <span class="icon-clock"></span>
                                            <span class="text">2-3 Hours</span>
                                        </div>
                                        <div class="points">
                                            <span class="icon-trophy"></span>
                                            <span class="text">50 Points</span>
                                        </div>
                                    </div>
                                    <div class="bottom">
                                        <div class="column">
                                            <a href="https://alison.com/course/fundamentals-of-accounting" class="btn btn-blue" title="Fundamentals of Accounting">
                                                Start Now </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 lp-image">
                                    <a href="https://alison.com/course/fundamentals-of-accounting" title="Fundamentals of Accounting">
                                        <img class="bg-image" src="https://cdn01.alison-static.net/courses/187/alison_courseware_intro_187.jpg" alt="Fundamentals of Accounting">
                                    </a>
                                </div>
                            </div>
                        </li>
                        @endforeach
                    </ol>
                </div>
                <div class="blue-dot blue-lrg-dot"></div>
                <div class="blue-dot blue-small-dot"></div>
            </div>
        </div>
    </div>
    <div class="lp-bottom-containter">
        <div class="wrapper">
            <h3>Complete!</h3>
            <p>Successfully complete all of these courses to receive a Accounting - Core Concepts Learning Path Award.</p>
            <p>All your learning will be reflected in your Learner Record, which you can download for free at any time.</p>
            <p>You also have the option of purchasing an Alison Certificate for each of the above courses you successfully complete.</p>
            <br><br>
            <div class="ad">

            </div>
        </div>
    </div>
</div>