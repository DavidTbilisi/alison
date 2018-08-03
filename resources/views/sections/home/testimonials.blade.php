<div class="testimonials-wrapper">

    <div class="testimonials-wrapper-right-triangle"></div>
    <div class="testimonials-wrapper-left-triangle"></div>
    <div class="testimonials-wrapper--inner wrapper clearfix">
        <div class="testimonials-wrapper--slider">

            <div class="testimonials-slider">
                <div class="testimonials-slider--inner">
                    <div class="testimonials-slider--image">
                        <img class="active" src="{{asset('assets/images/testimonials/1.jpg')}}" />
                        <img src="{{asset('assets/images/testimonials/2.jpg')}}" />
                        <img src="{{asset('assets/images/testimonials/3.jpg')}}" />
                        <img src="{{asset('assets/images/testimonials/4.jpg')}}" />
                    </div>
                    <div class="testimonials-slider--text">
                        <div class="icon-quote-right"></div>
                        <div class="testimonials-slider--slide-outer">

                            @foreach([1,2,3] as $index => $value)
                                <div class="testimonials-slider--slide">
                                    <p>
                                        “ {{$index}} Alison helped me to advance my professional learning. For anyone
                                        out there thinking about studying online, Alison provides
                                        a great avenue for self-growth; take advantage of it! Just keep yourself
                                        busy doing things that will upgrade your knowledge. Every time an opportunity
                                        to learn comes your way, always grab it. Alison has certainly been worth
                                        my time.” </p>
                                </div>
                            @endforeach

                        </div>
                        <a class="btn btn-blue" href="testimonials.html" title="see all">See All Testimonials</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="testimonials-wrapper--bubbles">

            <div class="pic-bubble  ">
                <div class="pic-bubble-image">
                    <img title="Changed my life!" src="{{asset('assets/images/testimonials/home-bubble-1.jpg')}}" />
                </div>
                <div class="pic-bubble--speech-bubble">
                    <div>
                        Changed my life! </div>
                    <div class="pic-bubble--ring"></div>
                </div>
            </div>
            <div class="pic-bubble  pic-bubble__green  ">
                <div class="pic-bubble-image">
                    <img title="Furthered my education" src="{{asset('assets/images/testimonials/home-bubble-2.jpg')}}"
                    />
                </div>
                <div class="pic-bubble--speech-bubble">
                    <div>
                        Furthered my education </div>
                    <div class="pic-bubble--ring"></div>
                </div>
            </div>
            <div class="pic-bubble  ">
                <div class="pic-bubble-image">
                    <img title="Improved my English" src="{{asset('assets/images/testimonials/home-bubble-3.jpg')}}" />
                </div>
                <div class="pic-bubble--speech-bubble">
                    <div>
                        Improved my English </div>
                    <div class="pic-bubble--ring"></div>
                </div>
            </div>
            <div class="pic-bubble  ">
                <div class="pic-bubble-image">
                    <img title="Got promoted!" src="{{asset('assets/images/testimonials/home-bubble-4.jpg')}}" />
                </div>
                <div class="pic-bubble--speech-bubble">
                    <div>
                        Got promoted! </div>
                    <div class="pic-bubble--ring"></div>
                </div>
            </div>
            <div class="pic-bubble   pic-bubble__green active ">
                <div class="pic-bubble-image">
                    <img title="Success in my career!" src="{{asset('assets/images/testimonials/home-bubble-5.jpg')}}" />
                </div>
                <div class="pic-bubble--speech-bubble">
                    <div>
                        Success in my career! </div>
                    <div class="pic-bubble--ring"></div>
                </div>
            </div>
        </div>
    </div>
</div>