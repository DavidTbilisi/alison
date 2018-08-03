(function( $ ) {

    $.fn.testimonial = function(options) {

        // JS PAGINATION
        !function(e){var a={init:function(t){var s=e.extend({items:1,itemsOnPage:1,pages:0,displayedPages:5,edges:2,currentPage:0,useAnchors:!0,hrefTextPrefix:"#page-",hrefTextSuffix:"",prevText:"Prev",nextText:"Next",ellipseText:"&hellip;",ellipsePageSet:!0,cssStyle:"light-theme",listStyle:"",labelMap:[],selectOnClick:!0,nextAtFront:!1,invertPageOrder:!1,useStartEdge:!0,useEndEdge:!0,onPageClick:function(e,a){},onInit:function(){}},t||{}),n=this;return s.pages=s.pages?s.pages:Math.ceil(s.items/s.itemsOnPage)?Math.ceil(s.items/s.itemsOnPage):1,s.currentPage?s.currentPage=s.currentPage-1:s.currentPage=s.invertPageOrder?s.pages-1:0,s.halfDisplayed=s.displayedPages/2,this.each(function(){n.addClass(s.cssStyle+" simple-pagination").data("pagination",s),a._draw.call(n)}),s.onInit(),this},selectPage:function(e){return a._selectPage.call(this,e-1),this},prevPage:function(){var e=this.data("pagination");return e.invertPageOrder?e.currentPage<e.pages-1&&a._selectPage.call(this,e.currentPage+1):e.currentPage>0&&a._selectPage.call(this,e.currentPage-1),this},nextPage:function(){var e=this.data("pagination");return e.invertPageOrder?e.currentPage>0&&a._selectPage.call(this,e.currentPage-1):e.currentPage<e.pages-1&&a._selectPage.call(this,e.currentPage+1),this},getPagesCount:function(){return this.data("pagination").pages},setPagesCount:function(e){this.data("pagination").pages=e},getCurrentPage:function(){return this.data("pagination").currentPage+1},destroy:function(){return this.empty(),this},drawPage:function(e){var t=this.data("pagination");return t.currentPage=e-1,this.data("pagination",t),a._draw.call(this),this},redraw:function(){return a._draw.call(this),this},disable:function(){var e=this.data("pagination");return e.disabled=!0,this.data("pagination",e),a._draw.call(this),this},enable:function(){var e=this.data("pagination");return e.disabled=!1,this.data("pagination",e),a._draw.call(this),this},updateItems:function(e){var t=this.data("pagination");t.items=e,t.pages=a._getPages(t),this.data("pagination",t),a._draw.call(this)},updateItemsOnPage:function(e){var t=this.data("pagination");return t.itemsOnPage=e,t.pages=a._getPages(t),this.data("pagination",t),a._selectPage.call(this,0),this},getItemsOnPage:function(){return this.data("pagination").itemsOnPage},_draw:function(){var t,s,n=this.data("pagination"),i=a._getInterval(n);a.destroy.call(this);var l="UL"===(s="function"==typeof this.prop?this.prop("tagName"):this.attr("tagName"))?this:e("<ul"+(n.listStyle?' class="'+n.listStyle+'"':"")+"></ul>").appendTo(this);if(n.prevText&&a._appendItem.call(this,n.invertPageOrder?n.currentPage+1:n.currentPage-1,{text:n.prevText,classes:"prev"}),n.nextText&&n.nextAtFront&&a._appendItem.call(this,n.invertPageOrder?n.currentPage-1:n.currentPage+1,{text:n.nextText,classes:"next"}),n.invertPageOrder){if(i.end<n.pages&&n.edges>0){if(n.useStartEdge){var r=Math.max(n.pages-n.edges,i.end);for(t=n.pages-1;t>=r;t--)a._appendItem.call(this,t)}n.pages-n.edges>i.end&&n.pages-n.edges-i.end!=1?l.append('<li class="disabled"><span class="ellipse">'+n.ellipseText+"</span></li>"):n.pages-n.edges-i.end==1&&a._appendItem.call(this,i.end)}}else if(i.start>0&&n.edges>0){if(n.useStartEdge){var p=Math.min(n.edges,i.start);for(t=0;t<p;t++)a._appendItem.call(this,t)}n.edges<i.start&&i.start-n.edges!=1?l.append('<li class="disabled"><span class="ellipse">'+n.ellipseText+"</span></li>"):i.start-n.edges==1&&a._appendItem.call(this,n.edges)}if(n.invertPageOrder)for(t=i.end-1;t>=i.start;t--)a._appendItem.call(this,t);else for(t=i.start;t<i.end;t++)a._appendItem.call(this,t);if(n.invertPageOrder){if(i.start>0&&n.edges>0&&(n.edges<i.start&&i.start-n.edges!=1?l.append('<li class="disabled"><span class="ellipse">'+n.ellipseText+"</span></li>"):i.start-n.edges==1&&a._appendItem.call(this,n.edges),n.useEndEdge))for(t=(p=Math.min(n.edges,i.start))-1;t>=0;t--)a._appendItem.call(this,t)}else if(i.end<n.pages&&n.edges>0&&(n.pages-n.edges>i.end&&n.pages-n.edges-i.end!=1?l.append('<li class="disabled"><span class="ellipse">'+n.ellipseText+"</span></li>"):n.pages-n.edges-i.end==1&&a._appendItem.call(this,i.end),n.useEndEdge))for(t=r=Math.max(n.pages-n.edges,i.end);t<n.pages;t++)a._appendItem.call(this,t);n.nextText&&!n.nextAtFront&&a._appendItem.call(this,n.invertPageOrder?n.currentPage-1:n.currentPage+1,{text:n.nextText,classes:"next"}),n.ellipsePageSet&&!n.disabled&&a._ellipseClick.call(this,l)},_getPages:function(e){return Math.ceil(e.items/e.itemsOnPage)||1},_getInterval:function(e){return{start:Math.ceil(e.currentPage>e.halfDisplayed?Math.max(Math.min(e.currentPage-e.halfDisplayed,e.pages-e.displayedPages),0):0),end:Math.ceil(e.currentPage>e.halfDisplayed?Math.min(e.currentPage+e.halfDisplayed,e.pages):Math.min(e.displayedPages,e.pages))}},_appendItem:function(t,s){var n,i,l=this,r=l.data("pagination"),p=e("<li></li>"),g=l.find("ul");n={text:(t=t<0?0:t<r.pages?t:r.pages-1)+1,classes:""},r.labelMap.length&&r.labelMap[t]&&(n.text=r.labelMap[t]),n=e.extend(n,s||{}),t==r.currentPage||r.disabled?(r.disabled||"prev"===n.classes||"next"===n.classes?p.addClass("disabled"):p.addClass("active"),i=e('<span class="current">'+n.text+"</span>")):(i=e(r.useAnchors?'<a href="'+r.hrefTextPrefix+(t+1)+r.hrefTextSuffix+'" class="page-link">'+n.text+"</a>":"<span >"+n.text+"</span>")).click(function(e){return a._selectPage.call(l,t,e)}),n.classes&&i.addClass(n.classes),p.append(i),g.length?g.append(p):l.append(p)},_selectPage:function(e,t){var s=this.data("pagination");return s.currentPage=e,s.selectOnClick&&a._draw.call(this),s.onPageClick(e+1,t)},_ellipseClick:function(t){var s=this,n=this.data("pagination"),i=t.find(".ellipse");i.addClass("clickable").parent().removeClass("disabled"),i.click(function(t){if(!n.disable){var l=e(this),r=(parseInt(l.parent().prev().text(),10)||0)+1;l.html('<input type="number" min="1" max="'+n.pages+'" step="1" value="'+r+'">').find("input").focus().click(function(e){e.stopPropagation()}).keyup(function(t){var l=e(this).val();13===t.which&&""!==l?l>0&&l<=n.pages&&a._selectPage.call(s,l-1):27===t.which&&i.empty().html(n.ellipseText)}).bind("blur",function(t){var l=e(this).val();return""!==l&&a._selectPage.call(s,l-1),i.empty().html(n.ellipseText),!1})}return!1})}};e.fn.pagination=function(t){return a[t]&&"_"!=t.charAt(0)?a[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist on jQuery.pagination"):a.init.apply(this,arguments)}}(jQuery);

        // The element the plugin is called on
        var mainElement = this;

        // Default settings
        var settings = $.extend({
            mainPage : true,
            endpoint : 'https://api.alison.com/v0.1',
            coursesUrl : 'https://alison.com/courses',
            courseUrl : 'https://alison.com/course',
            adsEnabled : $('.testimonial-page-content').attr("data-ads-enabled")
        }, options );


        /*
         *  Takes in the json and creates a auto fill search box
         *
         *  @param data (Array)
         *
         *  return String
         */

        function buildSearchBox(data){

            $('body').append('<div class="course-json" style="display:none">['+JSON.stringify(data)+']</div>');

            return  '<div class="filter-search">' +
                        '<input id="courseSearch" type="text" placeholder="Find Course">' +
                        '<button type="submit" class="btn btn-warning btn-fla"><span class="icon-search"></span></button>' +
                    '</div>';
        }


        /*
        *  Takes in the json and creates a HTML select box with checkboxes
        *
        *  @param data (Array)
        *  @param group (String)
        *
        *  return String
        */

        function buildFilterCheckbox(data, group){
            var options = '';

            // Loop through the JSON and send the options to be built
            for (var prop in data) {
                if(data.hasOwnProperty(prop)){
                    var id = prop
                    options +=  '<div class="checkbox-row">' +
                                    '<input id="'+id+'" type="checkbox" name="'+group+'" value="'+id+'">' +
                                    '<label for="'+id+'">'+data[prop]+'</label>' +
                                '</div>';
                }
            }

            return  '<div class="checkbox-select '+group+'">' +
                        '<div class="label" data-orig="'+group+'">'+group+'</div>' +
                        '<div class="checkbox-fields dropdownShadow">'+options+'</div>' +
                    '</div>';
        }


        /*
         *  Contacts the testimonials API to get the filter values
         *
         */

        function createFilters(){

            $.ajax({
                url: settings.endpoint+'/testimonial/filter-options',
                type: 'GET',
                contentType: 'application/json',
                success: function (data) {
                    if (typeof data.status !== 'undefined' && data.status === 200) {
                        var options = '',
                            result = data.result;

                        // Loop through the JSON and send the options to be built
                        for (var prop in result) {
                            if(result.hasOwnProperty(prop)){
                                if(prop === 'countries' || prop === 'categories' || prop === 'outcomes'){
                                    options += buildFilterCheckbox(result[prop], prop);
                                }
                                else{
                                    options += buildSearchBox(result[prop], prop);
                                }
                            }
                        }

                        $(mainElement).prepend( '<div class="testimonial-nav">' +
                                                    '<div class="testimonial-nav-inner">' +
                                                        '<span class="filter-row-label">Filter By:</span>'+options+'' +
                                                    '</div>' +
                                                '</div>');

                        $('.testimonial-widget').addClass('loaded');

                        onType();
                    }
                }
            });

            return undefined;
        }


        /*
         * Converts input string to slug
         *
         * @param str (String)
         *
         * return String
         */

        function string_to_slug (str) {
            str = str.replace(/^\s+|\s+$/g, ''); // trim
            str = str.toLowerCase();

            var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;",
                to   = "aaaaeeeeiiiioooouuuunc------";

            for (var i=0, l=from.length ; i<l ; i++) {
                str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
            }

            str = str.replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');

            return str;
        }


        /*
         *  Takes in the json and creates a HTML testimonial item
         *
         *  @param item (JSON)
         *
         *  return String
         */

        function createTestimonialItem(item){

            var name = item.firstname+' '+item.lastname,
                youtube = 'https://i.ytimg.com/vi/'+item['video_path']+'/hqdefault.jpg',
                cdn = 'http://cdn01.alison-static.net/'+item['picture_path'],
                flag = 'https://cdn01.alison-static.net/country_flags/'+findCountryCode(item['country_name'])+'.png';

            return  '<a href="/testimonial/'+item.slug.replace(" ", "-")+'" title="'+name+'\'s Testimonial" class="person '+((item['video_path'] === '') ? 'image' : 'video')+'">'+
                        '<div class="person-inner">'+
                            '<div class="heading">'+
                                '<div class="heading-image">'+
                                    '<img src="'+( (item['video_path'] === '') ? cdn : youtube ) +'" />'+
                                    ((item['video_path'] === '') ? '' : '<span href="/testimonial/'+item.slug+'" title="'+name+'\'s Testimonial" class="play"></span>')+
                                '</div>'+
                                '<div class="heading-text">'+
                                    '<h3>'+name+'</h3>'+
                                    '<div class="country">'+
                                        '<div>'+
                                            '<img class="country_flags" src="'+flag+'" alt="'+item['country_name']+'" width="20px" height="15px">'+
                                        '</div>'+
                                        ((item['country_name'] === 'United States of America') ? 'U.S.' : item['country_name']) +
                                    '</div>'+
                                    '<div class="primary_outcome">'+
                                        ((item.outcomes.length) ? item.outcomes[0].name : '') +
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                            '<div class="body">'+
                                '<div class="testimonial-text">'+
                                    item.testimonial.substr(0, 125)+'...'+
                                '</div>'+
                                    '<span data-id="'+item.slug+'" class="read-more">Read More</span>'+
                            '</div>'+
                        '</div>'+
                    '</a>';
        }


        /*
         *  Contacts the API and gets all of the testimonials
         *
         *  @param country (string) country the user is from
         *  @param category (string) the course category
         *  @param searchTerm (string) the search term that has to be searched
         *
         */

        function getTestimonials(country, category, outcomes, searchTerm, page = 1){
            var feedAdsIds = ['6024095253'],
                feedAdsFrequency = 3,
                bannerAdFrequency = 15;

            $('.testimonial-widget .loading').fadeIn();

            if(searchTerm !== 'all'){
                searchTerm = string_to_slug(searchTerm);
            }

            var url = '/filter?country_id='+country+'&outcome_id='+outcomes+'&category_slug='+category+'&course_slug='+searchTerm+'&page='+ page +'&size=30';

            $.ajax({
                url: settings.endpoint + '/testimonial' + url,
                type: 'GET',
                contentType: 'application/json',
                success: function (data) {

                    var output = '<div class="people"><div class="people-inner clearfix">';

                    if (typeof data.status !== 'undefined' && typeof data.result !== 'undefined' && data.status === 200) {

                        var result = data.result,
                            resultLength = result.length;

                        for(var x = 0, y = resultLength; x < y; x++){
                            output += createTestimonialItem(result[x]);

                            /*
                             * If ads are enabled, display inline ads depending on specified frequency
                             */

                            if((x+1) % feedAdsFrequency === 0 && settings.adsEnabled){
                                output += generateFeedAds(feedAdsIds, x);
                            }

                            /*
                             * If ads are enabled, display banner ad in the middle of the listing
                             */

                            if((x+1) === bannerAdFrequency && settings.adsEnabled){
                                output += generateBannerAd();
                            }
                        }

                        url = removeURLParameter(url, 'page')

                        generateTestimonialPagination(data.total, 30, page, location.protocol + '//' + location.host + location.pathname + url, country, category, outcomes, searchTerm);
                    }
                    else{
                        output += '<div class="no-results">No results to match your selection. <br><div class="btn btn-blue clear-filters">Clear Filters</div></div>';
                    }

                    output += '</div></div>';

                    if($('.people').length > 0){
                        $('.testimonial-widget .people').replaceWith(output);
                    }
                    else{
                        $('.testimonial-widget').append(output);
                    }

                    $('.testimonial-widget .loading').fadeOut();
                }
            });
        }

        function generateFeedAds(feedAdsIds, index){
            //var feedAdIndex = Math.round(Math.random() * ((feedAdsIds.length-1) - 0) + 0);
            var feedAdIndex = 0;

                return '<!-- Feed ad ' + feedAdsIds[feedAdIndex] + ' -->' +
                    '<div class="person video">' +
                        '<div class="person-inner ad-space">' +
                            '<div class="body">' +
                                '<div class="inline-ad">' +
                                    '<div class="ad-insert">' +
                                        '<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>' +
                                        '<ins class="adsbygoogle"' +
                                            'style="display:block"' +
                                            'data-ad-format="fluid"' +
                                            'data-ad-layout="image-top"' +
                                            'data-ad-client="ca-pub-4877892089121284"' +
                                            'data-ad-slot="' + feedAdsIds[feedAdIndex] + '"></ins>' +
                                        '<script>' +
                                            '(adsbygoogle = window.adsbygoogle || []).push({});' +
                                        '</script>' +
                                    '</div>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                    '<!-- End feed ad ' + feedAdsIds[feedAdIndex] + ' -->';
        }

        /*
         * Generate banner ad in the middle of the listing
         *
         * return string
         */

        function generateBannerAd(){
            return '<div class="clearfix"></div>' +
                    '<!-- Banner add middle -->' +
                    '<div class="wrapper">' +
                        '<div class="testimonial-page-ad ad banner-ad" style="clear:both;">'+
                            '<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>' + 
                            '<ins class="adsbygoogle"' +
                                'style="display:block"' +
                                'data-ad-client="ca-pub-4877892089121284"' +
                                'data-ad-slot="1273090789"' +
                                'data-ad-format="auto"></ins>' +
                            '<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>' +
                        '</div>' +
                    '</div>' +
                    '<!-- End Banner ad middle -->';
        }

        /*
         * Generate pagination
         *
         * @param total (number) total records retrieved
         * @param itemsPerPage (number)
         * @param page (number) current page number
         * @param url (String) 
         *
         */

        function generateTestimonialPagination(total, itemsPerPage, page, url, country, category, outcomes, searchTerm){

            $('.js-pagination').pagination({
                items: total,
                itemsOnPage: itemsPerPage,
                pages: Math.ceil(total / itemsPerPage),
                cssStyle: 'light-theme',
                currentPage : page,
                hrefTextPrefix : url+'&page=',
                onPageClick: function(pageNumber, e){
                    e.preventDefault();
                    currentPage = pageNumber;
                    $(window).scrollTop(0);

                    getTestimonials(country, category, outcomes, searchTerm, currentPage);
                }
            });

            return undefined;
        }

        /*
         * Remove url parameter
         *
         * @param url (string)
         * @param parameter (String) 
         *
         */

        function removeURLParameter(url, parameter) {
            //prefer to use l.search if you have a location/link object
            var urlparts= url.split('?');
            if (urlparts.length>=2) {

                var prefix= encodeURIComponent(parameter)+'=';
                var pars= urlparts[1].split(/[&;]/g);

                //reverse iteration as may be destructive
                for (var i= pars.length; i-- > 0;) {
                    //idiom for string.startsWith
                    if (pars[i].lastIndexOf(prefix, 0) !== -1) {
                        pars.splice(i, 1);
                    }
                }

                url= urlparts[0] + (pars.length > 0 ? '?' + pars.join('&') : "");
                return url;
            } else {
                return url;
            }
        }

        /*
         * Unselect checkbox
         *
         * @param checkbox (Object) each selected checkbox
         * @param that (Object) the current unselected checkbox
         *
         */

        function unselect(checkbox, that){
            checkbox.each(function(){
                if($(that).attr('id') !== $(this).attr('id')){
                    $(this).prop('checked', false);
                }
            });
        }


        /*
         * Check to see if checkbox need to be unselected
         *
         * @param el (Object) the checkbox element
         *
         */

        function unselectCheckbox(el){
            var that = el,
                countryInput = $('.countries .checkbox-fields input:checked'),
                categoriesInput = $('.categories .checkbox-fields input:checked');
                outcomesInput = $('.outcomes .checkbox-fields input:checked');

            if(countryInput.length > 1){
                unselect(countryInput, that);
            }
            if(categoriesInput.length > 1){
                unselect(categoriesInput, that);
            }
            if(outcomesInput.length > 1){
                unselect(outcomesInput, that);
            }
        }


        /*
         *  Get the values from the dropdown
         *
         */

        function getInputValues(){
            var countryInput = $('.countries .checkbox-fields input:checked'),
                categoriesInput = $('.categories .checkbox-fields input:checked'),
                outcomesInput = $('.outcomes .checkbox-fields input:checked'),
                country = countryInput.val() || '0',
                categories = categoriesInput.val() || 'all',
                outcomes = outcomesInput.val() || '0',
                course = $('.filter-search input').val() || 'all';

            getTestimonials(country,categories,outcomes,course);
        }


        /*
         *  Find the country code from the name
         *
         */

        function findCountryCode(country){
            var codes = { 'AFGHANISTAN' : 'AF', 'ALBANIA' : 'AL', 'ALGERIA' : 'DZ', 'AMERICAN SAMOA' : 'AS', 'ANDORRA' : 'AD', 'ANGOLA' : 'AO', 'ANGUILLA' : 'AI', 'ANTARCTICA' : 'AQ', 'ANTIGUA AND BARBUDA' : 'AG', 'ARGENTINA' : 'AR', 'ARMENIA' : 'AM', 'ARUBA' : 'AW', 'AUSTRALIA' : 'AU', 'AUSTRIA' : 'AT', 'AZERBAIJAN' : 'AZ', 'BAHAMAS' : 'BS', 'BAHRAIN' : 'BH', 'BANGLADESH' : 'BD', 'BARBADOS' : 'BB', 'BELARUS' : 'BY', 'BELGIUM' : 'BE', 'BELIZE' : 'BZ', 'BENIN' : 'BJ', 'BERMUDA' : 'BM', 'BHUTAN' : 'BT', 'BOLIVIA, PLURINATIONAL STATE OF' : 'BO', 'BONAIRE, SINT EUSTATIUS AND SABA' : 'BQ', 'BOSNIA AND HERZEGOVINA' : 'BA', 'BOTSWANA' : 'BW', 'BOUVET ISLAND' : 'BV', 'BRAZIL' : 'BR', 'BRITISH INDIAN OCEAN TERRITORY' : 'IO', 'BRUNEI DARUSSALAM' : 'BN', 'BULGARIA' : 'BG', 'BURKINA FASO' : 'BF', 'BURUNDI' : 'BI', 'CAMBODIA' : 'KH', 'CAMEROON' : 'CM', 'CANADA' : 'CA', 'CAPE VERDE' : 'CV', 'CAYMAN ISLANDS' : 'KY', 'CENTRAL AFRICAN REPUBLIC' : 'CF', 'CHAD' : 'TD', 'CHILE' : 'CL', 'CHINA' : 'CN', 'CHRISTMAS ISLAND' : 'CX', 'COCOS (KEELING) ISLANDS' : 'CC', 'COLOMBIA' : 'CO', 'COMOROS' : 'KM', 'CONGO' : 'CG', 'CONGO, THE DEMOCRATIC REPUBLIC OF THE' : 'CD', 'COOK ISLANDS' : 'CK', 'COSTA RICA' : 'CR', 'CROATIA' : 'HR', 'CUBA' : 'CU', 'CYPRUS' : 'CY', 'CZECH REPUBLIC' : 'CZ', 'DENMARK' : 'DK', 'DJIBOUTI' : 'DJ', 'DOMINICA' : 'DM', 'DOMINICAN REPUBLIC' : 'DO', 'ECUADOR' : 'EC', 'EGYPT' : 'EG', 'EL SALVADOR' : 'SV', 'EQUATORIAL GUINEA' : 'GQ', 'ERITREA' : 'ER', 'ESTONIA' : 'EE', 'ETHIOPIA' : 'ET', 'FALKLAND ISLANDS (MALVINAS)' : 'FK', 'FAROE ISLANDS' : 'FO', 'FIJI' : 'FJ', 'FINLAND' : 'FI', 'FRANCE' : 'FR', 'FRENCH GUIANA' : 'GF', 'FRENCH POLYNESIA' : 'PF', 'FRENCH SOUTHERN TERRITORIES' : 'TF', 'GABON' : 'GA', 'GAMBIA' : 'GM', 'GEORGIA' : 'GE', 'GERMANY' : 'DE', 'GHANA' : 'GH', 'GIBRALTAR' : 'GI', 'GREECE' : 'GR', 'GREENLAND' : 'GL', 'GRENADA' : 'GD', 'GUADELOUPE' : 'GP', 'GUAM' : 'GU', 'GUATEMALA' : 'GT', 'GUERNSEY' : 'GG', 'GUINEA' : 'GN', 'GUINEA-BISSAU' : 'GW', 'GUYANA' : 'GY', 'HAITI' : 'HT', 'HEARD ISLAND AND MCDONALD ISLANDS' : 'HM', 'HOLY SEE (VATICAN CITY STATE)' : 'VA', 'HONDURAS' : 'HN', 'HONG KONG' : 'HK', 'HUNGARY' : 'HU', 'ICELAND' : 'IS', 'INDIA' : 'IN', 'INDONESIA' : 'ID', 'IRAN, ISLAMIC REPUBLIC OF' : 'IR', 'IRAQ' : 'IQ', 'IRELAND' : 'IE', 'ISLE OF MAN' : 'IM', 'ISRAEL' : 'IL', 'ITALY' : 'IT', 'JAMAICA' : 'JM', 'JAPAN' : 'JP', 'JERSEY' : 'JE', 'JORDAN' : 'JO', 'KAZAKHSTAN' : 'KZ', 'KENYA' : 'KE', 'KIRIBATI' : 'KI', 'KOREA, DEMOCRATIC PEOPLE\'S REPUBLIC OF' : 'KP', 'KOREA, REPUBLIC OF' : 'KR', 'KUWAIT' : 'KW', 'KYRGYZSTAN' : 'KG', 'LAO PEOPLE\'S DEMOCRATIC REPUBLIC' : 'LA', 'LATVIA' : 'LV', 'LEBANON' : 'LB', 'LESOTHO' : 'LS', 'LIBERIA' : 'LR', 'LIBYA' : 'LY', 'LIECHTENSTEIN' : 'LI', 'LITHUANIA' : 'LT', 'LUXEMBOURG' : 'LU', 'MACAO' : 'MO', 'MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF' : 'MK', 'MADAGASCAR' : 'MG', 'MALAWI' : 'MW', 'MALAYSIA' : 'MY', 'MALDIVES' : 'MV', 'MALI' : 'ML', 'MALTA' : 'MT', 'MARSHALL ISLANDS' : 'MH', 'MARTINIQUE' : 'MQ', 'MAURITANIA' : 'MR', 'MAURITIUS' : 'MU', 'MAYOTTE' : 'YT', 'MEXICO' : 'MX', 'MICRONESIA, FEDERATED STATES OF' : 'FM', 'MOLDOVA, REPUBLIC OF' : 'MD', 'MONACO' : 'MC', 'MONGOLIA' : 'MN', 'MONTENEGRO' : 'ME', 'MONTSERRAT' : 'MS', 'MOROCCO' : 'MA', 'MOZAMBIQUE' : 'MZ', 'MYANMAR' : 'MM', 'NAMIBIA' : 'NA', 'NAURU' : 'NR', 'NEPAL' : 'NP', 'NETHERLANDS' : 'NL', 'NEW CALEDONIA' : 'NC', 'NEW ZEALAND' : 'NZ', 'NICARAGUA' : 'NI', 'NIGER' : 'NE', 'NIGERIA' : 'NG', 'NIUE' : 'NU', 'NORFOLK ISLAND' : 'NF', 'NORTHERN MARIANA ISLANDS' : 'MP', 'NORWAY' : 'NO', 'OMAN' : 'OM', 'PAKISTAN' : 'PK', 'PALAU' : 'PW', 'PALESTINE, STATE OF' : 'PS', 'PANAMA' : 'PA', 'PAPUA NEW GUINEA' : 'PG', 'PARAGUAY' : 'PY', 'PERU' : 'PE', 'PHILIPPINES' : 'PH', 'PITCAIRN' : 'PN', 'POLAND' : 'PL', 'PORTUGAL' : 'PT', 'PUERTO RICO' : 'PR', 'QATAR' : 'QA', 'ROMANIA' : 'RO', 'RUSSIAN FEDERATION' : 'RU', 'RWANDA' : 'RW', 'SAINT HELENA, ASCENSION AND TRISTAN DA CUNHA' : 'SH', 'SAINT KITTS AND NEVIS' : 'KN', 'SAINT LUCIA' : 'LC', 'SAINT MARTIN (FRENCH PART)' : 'MF', 'SAINT PIERRE AND MIQUELON' : 'PM', 'SAINT VINCENT AND THE GRENADINES' : 'VC', 'SAMOA' : 'WS', 'SAN MARINO' : 'SM', 'SAO TOME AND PRINCIPE' : 'ST', 'SAUDI ARABIA' : 'SA', 'SENEGAL' : 'SN', 'SERBIA' : 'RS', 'SEYCHELLES' : 'SC', 'SIERRA LEONE' : 'SL', 'SINGAPORE' : 'SG', 'SINT MAARTEN (DUTCH PART)' : 'SX', 'SLOVAKIA' : 'SK', 'SLOVENIA' : 'SI', 'SOLOMON ISLANDS' : 'SB', 'SOMALIA' : 'SO', 'SOUTH AFRICA' : 'ZA', 'SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS' : 'GS', 'SOUTH SUDAN' : 'SS', 'SPAIN' : 'ES', 'SRI LANKA' : 'LK', 'SUDAN' : 'SD', 'SURINAME' : 'SR', 'SVALBARD AND JAN MAYEN' : 'SJ', 'SWAZILAND' : 'SZ', 'SWEDEN' : 'SE', 'SWITZERLAND' : 'CH', 'SYRIAN ARAB REPUBLIC' : 'SY', 'TAIWAN, PROVINCE OF CHINA' : 'TW', 'TAJIKISTAN' : 'TJ', 'TANZANIA, UNITED REPUBLIC OF' : 'TZ', 'THAILAND' : 'TH', 'TIMOR-LESTE' : 'TL', 'TOGO' : 'TG', 'TOKELAU' : 'TK', 'TONGA' : 'TO', 'TRINIDAD AND TOBAGO' : 'TT', 'TUNISIA' : 'TN', 'TURKEY' : 'TR', 'TURKMENISTAN' : 'TM', 'TURKS AND CAICOS ISLANDS' : 'TC', 'TUVALU' : 'TV', 'UGANDA' : 'UG', 'UKRAINE' : 'UA', 'UNITED ARAB EMIRATES' : 'AE', 'UNITED KINGDOM' : 'GB', 'UNITED STATES OF AMERICA' : 'US', 'UNITED STATES MINOR OUTLYING ISLANDS' : 'UM', 'URUGUAY' : 'UY', 'UZBEKISTAN' : 'UZ', 'VANUATU' : 'VU', 'VENEZUELA, BOLIVARIAN REPUBLIC OF' : 'VE', 'VIET NAM' : 'VN', 'VIRGIN ISLANDS, BRITISH' : 'VG', 'VIRGIN ISLANDS, U.S.' : 'VI', 'WALLIS AND FUTUNA' : 'WF', 'WESTERN SAHARA' : 'EH', 'YEMEN' : 'YE', 'ZAMBIA' : 'ZM', 'ZIMBABWE' : 'ZW' };

            return codes[country.toUpperCase()]
        }


        // Auto-complete Functions ---------------------------------------------------


        var autoComplete = {};


        /*
         * When typing starts check for length and send to
         * search for relevant titles
         *
         */

        function onType(){
            autoComplete['options'] = {
                courseTitles :JSON.parse($('.course-json').text()),
                typeLength : 3,
                resultsLength : 5,
                inputBox : document.getElementById("courseSearch")
            };

            var that = autoComplete;

            autoComplete.options.inputBox.onkeyup = function(){
                var typeVal = that.options.inputBox.value;

                buildHtml((typeVal.length > autoComplete.options.typeLength) ? getRelevantTitles(typeVal) : '');
            };
        }


        /*
         * Search object return relevant titles
         *
         * @param part (String) the part to be searched in course titles
         *
         * return String
         *
         */

        function getRelevantTitles(part){
            var obj = autoComplete.options.courseTitles[0],
                html = '',
                amount = 0,
                search = part.toLowerCase(),
                BreakException = {};

            // Try/Catch it can exit early once enough suggestions have been found
            try {
                Object.keys(obj)
                    .forEach(function(k) {
                        if(obj[k].toLowerCase().indexOf(search) !== -1){
                            if(amount < 5){
                                var replace = obj[k].toLowerCase().replace(search,'<strong>'+search+'<\/strong>');
                                html += '<div>'+replace+'</div>';
                            }
                            else{
                                throw BreakException;
                            }
                            amount++;
                        }
                    });
            } catch (e) {
                if (e !== BreakException) throw e;
            }

            return html === '' ? '<span style="text-transform:none;">We don\'t have any testimonials related to this course. Why not create one here, or view all testimonials here.</span>' : html;
        }


        /*
        * Build the HTML for the autocomplete box
        *
        * @param html (string) the html to be inserted into the autocomplete
        *
        */

        function buildHtml(html){
            var box;

            // Build the html nodes
            if(document.getElementById("autoTestimonialBox") === null){
                box = document.createElement("div");
                box.id = 'autoTestimonialBox';
                box.setAttribute('class', 'dropdownShadow'); //box.class = 'dropdownShadow';
            }
            else{
                box = document.getElementById("autoTestimonialBox");
                box.innerHTML = '';
            }

            if(html === ''){
                box.remove();
                return;
            }

            box.insertAdjacentHTML('beforeend', html);

            autoComplete.options.inputBox.parentNode.appendChild(box);
        }


        // MINI Functions ---------------------------------------------------


        /*
         *  Contacts the API and gets all of the testimonials
         *
         *  @param country (String) country the user is from
         *  @param category (String) the course category
         *  @param outcomes (int) id of learning outcome to be used
         *  @param searchTerm (String) the search term that has to be searched
         *
         */

        function getMiniTestimonials(country, category, outcomes, searchTerm, size=5){

            var widget = $('.testimonial-widget');

            $.ajax({
                url: settings.endpoint+'/testimonial/filter?country_id='+country+'&category_slug='+category+'&outcome_id='+outcomes+'&course_slug='+searchTerm+'&page=1&size='+size,
                type: 'GET',
                contentType: 'application/json',
                success: function (data) {
                    var output = '<div class="people">'+
                        '<div class="people-inner clearfix">';

                    if (typeof data.status !== 'undefined' && data.status === 200) {
                        var result = data.result,
                            resultLength = result.length;

                        for(var x = 0, y = resultLength; x < y; x++){
                            output += createTestimonialItem(result[x]);
                        }
                    }

                    output += '</div></div>';

                    console.log(output);

                    widget.append(output).addClass('loaded').find('.person:nth-child(1)').addClass('active');

                    // Load in first testimonial
                    animateWidget();

                    // Create interval to for testimonial slider
                    setInterval(animateWidget, 6000);
                }
            });
        }


        function animateWidget(){
            if(!$('.testimonial-widget').hasClass('pause')){

                var active = $('.person.active'),
                    first = $('.person:nth-child(1)'),
                    next = active.next(),
                    width = 230;

                if(next.length === 0){
                    next = first;
                }

                active.animate({
                    left: "-="+(width + 5)
                }, 700, function() {

                    if(active.next().length == 0){
                        active.removeClass('active').attr('style', '');
                        first.addClass('active')
                    }
                    else{
                        active.removeClass('active').attr('style', '').next().addClass('active');
                    }

                });

                next.animate({
                    left: "-="+(width + 5)
                }, 700);
            }
        }


        /*
         *  Contacts the API and gets all of the testimonials
         *
         *  @param slug (String) slug of user to get information for
         *
         */

        function createPopup(slug){

            var popup = $('.testimonial-popup'),
                widget = $('.testimonial-widget');

            // If the popup is already populated then just show existing popup
            if(popup.attr('data-user') === slug){
                popup.fadeIn();

                return;
            }

            widget.find('.loading').fadeIn();

            $.ajax({
                url: settings.endpoint+'/testimonial/get/'+slug,
                type: 'GET',
                contentType: 'application/json',
                success: function (data) {
                    if (typeof data.status !== 'undefined' && data.status === 200) {

                        if(popup.length > 0){
                            popup.remove();
                        }

                        var output =    '<div class="testimonial-popup" data-user="'+data.result.slug+'">' +
                                            '<div class="testimonial-popup-inner clearfix">' +
                                                '<div class="close-holder">'+
                                                    '<span class="icon-cross2"></span>'+
                                                '</div>'+
                                                createPopupHTML(data.result)+'</div>'+
                                        '</div>';

                        widget.append(output);

                        widget.find('.loading').fadeOut();
                    }
                }
            });
        }

        /*
         *  Creates the popup HTML
         *
         *  @param person (Object) the person data
         *
         */

        function createPopupHTML(person){
            var html = '<div class="testimonial '+((person['video_path'] != '') ? 'video' : '')+'">'+
                            '<div class="testimonial-content clearfix">'+
                                '<div class="testimonial-left">';

            if(person['video_path'] != ''){
                html +=  '<div class="testimonial-video">'+
                            '<div class="video-container">'+
                                '<iframe width="560" height="315" src="'+person['video_path']+'" frameborder="0" allowfullscreen></iframe>'+
                            '</div>'+
                        '</div>'+
                    '</div><!-- END .testimonial-left -->'+
                    '<div class="testimonial-right">';
            }
            else{
                html +=     '<h2>'+person.firstname+' '+person.lastname+'</h2>'+
                            '<div class="testimonial-image">'+
                                '<img src="http://alison.app/images/users/dbe4c4bd0f7615560fe49190808ccc18a15d280b71b6af3d76f1949d7830f0b6/2.jpg" />'+
                            '</div>'+
                            '<div class="testimonial-country">'+
                                '<div class="country">'+
                                    '<img class="country_flags" src="https://cdn01.alison-static.net/country_flags/'+findCountryCode(person['country_name'])+'.png" alt="'+person['country_name']+'" width="20px" height="15px">'+
                                    person['country_name']+
                                '</div>'+
                            '</div>'+
                        '</div><!-- END .testimonial-left -->'+
                        '<div class="testimonial-right">';
            }


			if(person['video_path'] != ''){
                html +=     '<h2>'+person.firstname+' '+person.lastname+'</h2>'+
                            '<div class="testimonial-country">'+
                                '<div class="country">'+
                                    '<img class="country_flags" src="https://cdn01.alison-static.net/country_flags/'+findCountryCode(person['country_name'])+'.png" alt="'+person['country_name']+'" width="20px" height="15px">'+
                                    person['country_name']+
                                '</div>'+
                            '</div>';
            }

            html += '<p>'+person.testimonial+'</p>';

            html += '<ul class="link-group">'+
                        '<li class="share-trigger">'+
                            '<a class="social-link-btn" title="Share this course"><span class="icon-share"></span></a>'+
                            '<div class="icon-group">'+
                                '<div class="social-buttons">'+
                                    '<a href="https://www.facebook.com/sharer/sharer.php?u=https://alison.com/testimonial/'+person.slug+'" target="_blank" rel="nofollow">'+
                                        '<i class="icon-facebook"></i>'+
                                    '</a>'+
                                    '<a href="https://twitter.com/intent/tweet?url=https://alison.com/testimonial/'+person.slug+'" target="_blank" rel="nofollow">'+
                                        '<i class="icon-twitter"></i>'+
                                    '</a>'+
                                    '<a href="https://plus.google.com/share?url=https://alison.com/testimonial/'+person.slug+'" target="_blank" rel="nofollow">'+
                                        '<i class="icon-google"></i>'+
                                    '</a>'+
                                    '<a href="http://www.linkedin.com/shareArticle?url=https://alison.com/testimonial/'+person.slug+'&amp;mini=true" target="_blank" rel="nofollow">'+
                                        '<i class="icon-linkedin"></i>'+
                                    '</a>'+
                                '</div>'+
                            '</div>'+
                        '</li><!-- END .share-trigger -->'+
                    '</ul><!-- END .link-group -->'+
                '</div><!-- END .testimonial-right -->'+
                '</div><!-- END .testimonial-content -->';

            var courses = person['completed_courses'],
                completed = courses.length > 8 ? 8 : courses.length;

			// Check to see if there are completed courses
            if(completed > 0){
			    html += '<div class="testimonial-courses">'+
                            '<h3>Courses completed by '+person.firstname+' '+person.lastname+'</h3>'+
                                '<ul class="clearfix">';

                for(var x = 0; x < completed; x++){
                    html += '<li>'+
                                '<a class="'+courses[x]['root_category_slug']+'-category completed-category" href="'+settings.coursesUrl+'/'+courses[x]['root_category_slug']+'" title="'+courses[x]['category_name']+'">'+
                                    courses[x]['category_name']+
                                '</a>'+
                                '<a href="'+settings.courseUrl+'/'+courses[x]['course_slug']+'" class="course-name" title="'+courses[x]['course_name']+'">'+
                                    courses[x]['course_name']+
                                '</a>'+
                            '</li>';
                }
            }

            html +=         '</ul>'+
                        '</div><!-- END .testimonial-courses -->'+
                    '</div><!-- END .testimonial -->';

             return html;
        }

        // Events ---------------------------------------------------


        /*
         *  When dropdown is selected open the checkboxes
         *
         */

        $(document).on('click', '.checkbox-select', function(){
            var select = $('.checkbox-select.open');

            if(select.length > 0 && !$(this).hasClass('open')){
                select.removeClass('open').find('.checkbox-fields').fadeOut();
            }

            // Toggle dropdown
            $(this).toggleClass('open');
            $(this).find('.checkbox-fields').fadeToggle();
        });


        /*
         *  Stop checkbox dropdown fading when a checkbox is selected
         *
         */

        $(document).on('click', '.checkbox-row', function(e){
            // Stop the checkbox event from being triggered
            e.stopImmediatePropagation();
        });


        /*
         *  When a checkbox is selected get testimonials
         *
         */

        $(document).on('change', '.testimonial-widget .checkbox-row input', function(){
            var parent = $(this).parents('.checkbox-select'),
                value = $(this).next().text(),
                label =  parent.find('.label');

            if(this.checked) {
                // Unselect previous checkbox
                unselectCheckbox(this);

                // Update dropdown values
                label.text(value);

                // Slide up checkbox container
                $(this).parents('.checkbox-fields').slideUp();
            }

            // Reset dropdown label
            if(parent.find('input:checked').length === 0){
                label.text(label.attr('data-orig'));
            }

            // Get the values of the input and call the endpoint
            getInputValues();
        });


        /*
         *  When the autocomplete is clicked add the value to the box
         *
         */

        $(document).on('click', '#autoTestimonialBox > div', function(){
            $('#courseSearch').val($(this).text());
            $('#autoTestimonialBox').remove();
        });


        /*
         *  When search is clicked get input values and fire search ajax
         *
         */

        $(document).on('click', '.filter-search button', function(){
            getInputValues();
        });


        /*
         *  When mini person is clicked on pop up the full testimonial
         *
         */

        $(document).on('click', '.mini .person a', function(e){
            e.preventDefault();

            // Create the testimonial popup
            createPopup($(this).attr('data-id'));

            // Pause slider
            $('.testimonial-widget').addClass('pause');
        });


        /*
         *  On hover add class pause to pause slider
         *
         */

        $(document).on('mouseenter', '.mini .person', function(){
            $('.testimonial-widget').addClass('pause');
        });
        $(document).on('mouseleave', '.mini .person', function(){
            if(!$('.testimonial-popup').is(':visible')){
                $('.testimonial-widget').removeClass('pause');
            }
        });


        /*
         *  When the close of the full testimonial is clicked
         *
         */

        $(document).on('click', '.testimonial-popup .close-holder', function () {
            $('.testimonial-popup').fadeOut();
            $('.testimonial-widget').removeClass('pause');
        });

        $(document).on('click', '.testimonial-popup', function (e) {
            if($(e.target).hasClass('testimonial-popup')){
                $('.testimonial-popup').fadeOut();
                $('.testimonial-widget').removeClass('pause');
            }
        });


        /*
         * Clear filters
         *
         */

        $(document).on('click', '.clear-filters', function () {
            $('.checkbox-row input:checked').each(function(){
                var label = $(this).parents('.checkbox-select').find('.label'),
                    originalLabel = label.attr('data-orig');

                $(this).prop('checked', false);
                label.text(originalLabel);
            });

            $('#courseSearch').val('');

            getInputValues();
        });


        // Plugin Initialisation --------------------------------------------------------------------


        /*
         *  Initialises the plugin
         *
         */

        function init(){
            if(!$(mainElement).hasClass('testimonial-widget')){
                $(mainElement).addClass('testimonial-widget');
            }

            $(mainElement).append('<div class="loading"></div>');

            // If this is the main testimonial widget
            if(settings.mainPage === true){

                // create filters
                createFilters();

                // get Testimonials
                getTestimonials(0,'all',0,'all');
            }
            else{
                
                // Add mini class for styles
                $(mainElement).addClass('mini');
                
                // get Testimonials
                getMiniTestimonials(0,'all', 0,'all', 5);
            }
        }

        // Initialise
       init();
    };
}( jQuery ));