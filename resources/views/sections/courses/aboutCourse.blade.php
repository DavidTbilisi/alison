<div id="main-holder">
    <script>
        // DFP Attribution v.1.0
        // Parse query string to js object
        function parseParams(e) {
            var n, o, t = e.split("&"), p = {};
            for (n = 0; n < t.length; n++) (o = t[n].split("=")).length < 2 && o.push(""), p[decodeURIComponent(o[0])] = decodeURIComponent(o[1]);
            return p
        }

        googletag.cmd.push(function () {
            var params;
            if (!sessionStorage.getItem('dfpParams')) {
                // Session does not contain dfpParams

                // Check iof there are any query parameters and it has utm parameters
                if (window.location.search && window.location.search.indexOf('utm_') !== -1) {

                    // Collect params from query string and parse them to an object
                    params = parseParams(window.location.search.substring(1));

                    // Make sure to replace all '+' from the utm strings with space
                    params.utm_source = params.utm_source.replace(/\+/g, ' ');
                    params.utm_medium = params.utm_medium.replace(/\+/g, ' ');
                    params.utm_campaign = params.utm_campaign.replace(/\+/g, ' ');

                    // Save stringified object in session
                    sessionStorage.setItem('dfpParams', JSON.stringify(params));

                    // Use params in targeting
                    googletag.pubads().setTargeting('source', params['utm_source']);
                    googletag.pubads().setTargeting('medium', params['utm_medium']);
                    googletag.pubads().setTargeting('campaign', params['utm_campaign']);
                    console.log('*params saved in session; sent to dfp');
                    console.log('*****');
                }

            } else {
                // Session does contain dfpParams

                // Collect params from the session and parse them back to an object
                params = JSON.parse(sessionStorage.getItem('dfpParams'));

                // Use params in targeting
                googletag.pubads().setTargeting('source', params['utm_source']);
                googletag.pubads().setTargeting('medium', params['utm_medium']);
                googletag.pubads().setTargeting('campaign', params['utm_campaign']);
                console.log('**params retrieved from session; sent to dfp');
                console.log('*****');

            }

            // Size Mapping object
            var stickyAdMapping = googletag.sizeMapping().addSize([1775, 900], [300, 600]).addSize([1440, 600], [160, 600]).addSize([0, 0], []).build(),
                leftStickyMapping = googletag.sizeMapping().addSize([0, 0], [160, 600]).build(),
                bannerAdsMapping = googletag.sizeMapping().addSize([1050, 600], [728, 90]).addSize([768, 600], [728, 90]).addSize([480, 600], [468, 60]).addSize([0, 0], [320, 50]).build();

            gptAdSlots.push(googletag.defineSlot('/6434961/new-site-course-landing-responsive', [320, 50], 'div-gpt-ad-1522225795529-2').defineSizeMapping(bannerAdsMapping).addService(googletag.pubads()));
            gptAdSlots.push(googletag.defineSlot('/6434961/course-landing-responsive-bottom', [320, 50], 'div-gpt-ad-1522225795529-1').defineSizeMapping(bannerAdsMapping).addService(googletag.pubads()));
            gptAdSlots.push(googletag.defineSlot('/6434961/course-landing-footer', [320, 50], 'div-gpt-ad-1523281436086-0').defineSizeMapping(bannerAdsMapping).addService(googletag.pubads()));

            if (window.innerWidth > 1570) {
                gptAdSlots.push(googletag.defineSlot('/6434961/course-landing-page-right-side', [160, 600], 'div-gpt-ad-1522225795529-0').defineSizeMapping(stickyAdMapping).addService(googletag.pubads()));
            }
            if (window.innerWidth < 1570 && window.innerWidth > 1130) {
                gptAdSlots.push(googletag.defineSlot('/6434961/course-landing-page-right-side', [160, 600], 'div-gpt-ad-1522225795529-3').defineSizeMapping(leftStickyMapping).addService(googletag.pubads()));
            }
        });
    </script>
    <div id="course-landing">
        <div class="course-landing-bg otherwise "></div>
        <div class="ad dfp" style="margin-top: 80px;margin-bottom:-100px;">

            <div id="div-gpt-ad-1522225795529-2">
                <script>
                    googletag.cmd.push(function () {
                        googletag.display('div-gpt-ad-1522225795529-2');
                        googletag.pubads().refresh([gptAdSlots[0]]);
                    });
                </script>
            </div>
        </div>

        @include("sections.courses.about.breadcrumb")
        @include("sections.courses.about.relations-widget")

        <div class="course-landing-wrapper" id="add-widget" style="margin-left: 240px;">
            <div class="content-wrapper">

                @include("sections.courses.about.course-header")

                <div class="ad dfp course-landing-ad">

                    <div id="div-gpt-ad-1522225795529-1">
                        <script>
                            googletag.cmd.push(function () {
                                // This will only register the slot. Ad will be fetched only when refresh is called.
                                googletag.display('div-gpt-ad-1522225795529-1');
                                // googletag.pubads().refresh([gptAdSlots[1]]); // Lazy load will refresh this ad
                            });
                        </script>
                    </div>
                </div>

                @include("sections.courses.about.landing-separator")

                <div class="ad dfp">

                    <div id="div-gpt-ad-1523281436086-0">
                        <script>
                            googletag.cmd.push(function () {
                                googletag.display('div-gpt-ad-1523281436086-0');
                                // googletag.pubads().refresh([gptAdSlots[2]]); // Lazy load will load this ad
                            });
                        </script>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="sticky-ad inner-page-sticky-ad course-landing" style="position: fixed; top: 380px;"></div>
    <div class="sticky-left course-landing"
         style="left: 0px; z-index: 900; width: 160px; height: 600px; display: block; position: absolute; top: 1095px;">

        <div id="div-gpt-ad-1522225795529-3">
            <script>
                googletag.cmd.push(function () {
                    googletag.display('div-gpt-ad-1522225795529-3');
                    if ((gptAdSlots[3]) && (window.innerWidth < 1570 && window.innerWidth > 1130)) {
                        googletag.pubads().refresh([gptAdSlots[3]]);
                    }
                });
            </script>
        </div>
    </div>
</div>