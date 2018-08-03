/*
 *
 * Search
 *
 */
// New Search
function Search(options){

    // OPTIONS
    if(typeof options === 'undefined'){
        var options = {};
    }

    options.ads = options.ads || true;
    options.courseCount = options.courseCount || (options['ads'] ? 25 : 30);
    options.page = options.page || 1;
    options.blankCount = options.blankCount || 30;
    options.updateUrl = options.updateUrl || false;

    this.options = options;
    //////


    var that = this,
        course = new Course(),
        history = {},
        metaTitle = 'Free Online Diploma and Certificate Level Training Courses | Alison';


    /*
     * Search Initialisation
     *
     */

    this.init = function(){

        Lang.get('routes.courses.index', 'search-root', 'courses');
        Lang.get('routes.learning-paths.index', 'lp-root', 'learning-paths');

        this.getUrlVars();

        // When a filter is clicked
        $('.filter input[type=checkbox]').click(function(){
            that.options.updateUrl = true;
            that.options.page = 1;

            // Uncheck child categories
            if($(this).not(':checked')){

                var ul = $(this).closest('li').find('> ul');

                // Uncheck all child lists
                ul.find('input[type=checkbox]').each(function(){
                    $(this).prop('checked', false);
                });

                // Close all child lists
                ul.each(function(){
                    $(this).slideUp();
                });
            }

            that.callApi();
        });

        $('.search-container form').submit(function(e){
            e.preventDefault();

            that.callApi();
        })

        // When the sorting dropdown is selected
        $('select[name=sorting]').change(function(){
            that.callApi();
        });

        $('.search-filters .tab').click(function () {
            $(this).parent().toggleClass('open');
        });

        // Read more in categoryMeta click
        $(document).on('click', '.cat-read-more', function(){
            if($(this).hasClass('less')){
                $('.tag-content').css('max-height', '92px');
                $('.cat-read-more').text('Read More');
            }
            else{
                $('.tag-content').css('max-height', 'none');
                $('.cat-read-more').text('Read Less');
            }

            $(this).toggleClass('less')
        });

        // Fire this function when someone uses browser back and forward button
        window.onpopstate = function () {
            that.options.updateUrl = false;

            // Get url vars and update checkboxes
            that.getUrlVars();

            // Check if url will be containing single category
            if(window.history.state !== null && typeof window.history.state['single'] !== 'undefined'){
                var singleCategory = window.history.state['single'];

                that.checkCategories(singleCategory);
                that.getCategoryMeta(singleCategory);
            }

            // Call the api
            that.callApi();
        };

        this.callApi();
    };


    /*
     * Creates query from select boxes
     *
     */

    this.createCourseQuery = function(){

        var filter = {},
            query = '';

        // Get all checked boxes and slide children or select parent
        $('.filter input[type=checkbox]:checked').each(function(){
            that.checkCategories($(this).attr('name'));

            var childList = $(this).closest('li').find('> ul'),
                parent = $(this).parents('.filter');

            // If this has a child then show child boxes
            if(childList.length > 0){
                childList.slideDown();
            }

            // If this has child checkboxes that are ticked don't add it to the list
            if(childList.length === 0 || childList.find('input[type=checkbox]:checked').length === 0){
                (filter[parent.attr('data-url-var')] = filter[parent.attr('data-url-var')] || []).push($(this).attr('name'));
            }
        });

        // Loop categories to add them to the query and determine if category meta is required
        var category = [],
            type = [];

        // Go through all keys and check for category and type so we can apply different url rules
        for (var key in filter) {
            for(var x = 0; x < filter[key].length; x++){
                if(key === 'category'){
                    (category = category || []).push(filter[key][x]);
                }
                if(key === 'type'){
                    (type = type || []).push(filter[key][x]);
                }

                var queryFilter = filter[key][x];

                if(key === 'level'){
                    queryFilter = filter[key][x].split('level-')[1];
                }

                query += '&'+key+'='+queryFilter;
            }
        }

        if($('select[name=sorting] option:selected').val() !== 'popular-desc'){
            query += '&order=released-desc'
        }

        // Get search box query
        var searchInput = $('input[name=query]');

        // If searchInput has something in it
        if(searchInput.val() !== ''){
            query += '&query='+searchInput.val();
        }

        // Push the appropriate urls
        var urlToPush = location.protocol + '//' + location.host + (language === 'en' ? '' : '/'+language) + '/' + translations['search-root'],
            stateObject = {};

        // If one category is selected
        if(category.length === 1){
            // Remove category from the url
            var remove = removeURLParameter('?'+query, 'category');

            // Store the single catgory depeding on filter click or inital page load
            if(this.options.updateUrl === true){
                stateObject = {
                    'single' : category[0],
                    'tag' : false
                };

                this.getCategoryMeta(category[0], true);
            }
            else{
                if($('.first-tag-load').length !== 0){
                    window.history.replaceState({'single' : category[0]}, document.title, window.location.href);
                }
            }

            urlToPush = $('input[name=' + category[0] + ']').parents('.category-cancel').attr('href') + ( remove == '' ? '' : '?'+remove );
        }
        else if(type.length === 1 && category.length === 0){ // If Only one type is selected
            // Remove type from the url
            var remove = removeURLParameter('?'+query, 'type');

            stateObject = {
                'single' : type[0],
                'tag' : false
            };

            if(this.options.updateUrl === false){
                window.history.replaceState(stateObject, document.title, window.location.href);
            }
            else{
                this.populateMeta($('.type-link-inner input:checked + label').text(), $('.'+type[0]+'-intro').html());
            }

            urlToPush = $('input[name=' + type[0] + ']').parents('.type-cancel').attr('href') + ( remove == '' ? '' : '?'+remove );
        }
        else{
            // Get Tag to load
            var tag = $('.single-tag-desc');

            // If there is a tag present
            if(tag.length > 0 || stateExists('tag')) {

                // Get tag from the categoryMeta on initial load or from the history state on back/forward
                var tagName = stateExists('tag') ? window.history.state['single'] : tag.attr('data-category');

                query += '&tag='+tagName;

                // Add tag to state
                window.history.replaceState({'single' : tagName, 'tag' : true}, document.title, window.location.href);
            }
            else{ // Default query with no refinement

                if(this.options.updateUrl !== false) {
                    this.populateMeta($('.active-page').attr('title'), $('.active-page').html());
                }

                if(query !== ''){
                    urlToPush += '?' + query;
                }
                else{
                    urlToPush += (this.options.page == 1 ? '' : '?page='+this.options.page);
                }

                if($('.tag-content-inner').outerHeight() > 92){
                    $('.cat-read-more').show();
                }
                else{
                    $('.cat-read-more').hide();
                }
            }
        }

        if(this.options.updateUrl === true){

            urlToPush = urlToPush + ( this.options.page == 1 ? '' : ( ( urlToPush.indexOf('?') > -1 ) ? '' : '?' ) + '&page='+this.options.page );

            window.history.pushState(stateObject, metaTitle, urlToPush);
            document.title = metaTitle;
        }

        return query;
    };


    /*
     * Creates query from select boxes
     *
     */

    this.createLPQuery = function(){

        var filter = {},
            query = language + '/' + this.options.courseCount + '/' + this.options.page,
            urlToPush = $('.learning-paths.ajax-nav').attr('href');

        if(this.options.updateUrl === true){
            window.history.pushState({}, metaTitle, urlToPush);
        }

        return query;
    };


    /*
     * Check the appropriate parent categories and display the children
     *
     */

    this.checkCategories = function(value){
        var box =  $('input[name="' + value + '"]');

        if(box.hasClass('child-category')){
            box.parents('.first-child').slideDown().prev().find('input[type=checkbox]').prop('checked', true);
        }
        else if(box.hasClass('child-2-category')){
            box.parents('.second-child').slideDown().prev().find('input[type=checkbox]').prop('checked', true);
            box.parents('.first-child').slideDown().prev().find('input[type=checkbox]').prop('checked', true);
        }

        // Check current box
        box.prop('checked', true);
    };


    /*
     * Populate meta info
     *
     * @param {string} heading - The heading for meta info
     * @param {string} intro - The into for meta info
     *
     */

    this.populateMeta = function(heading, intro){
        $('.category-meta').find('h1').text(heading).next().find('.tag-content-inner').html(intro);
    }

    /*
     * Get the current category meta
     *
     * @param {string} category - The category to load meta for
     *
     */

    this.getCategoryMeta = function(category, isCategory){

        var categoryMeta,
            type = stateExists('tag') ? 'tag' : 'category' ;

        if(typeof isCategory !== 'undefined' && isCategory === true){
            type = 'category';
        }

        $.ajax({
            url: $('#search').attr('data-endpoint') + '/course/'+type+'/details/en/' + category,
            type: 'GET',
            contentType: 'application/json',
            success: function (data) {
                if (data.status === 200) {
                    categoryMeta =  '<div class="tag-description" data-category="' + category + '" style="display: none">' +
                                        '<h1>' + data.result.name + '</h1>' +
                                        '<div class="tag-content">' +
                                            '<div class="tag-content-inner">' +
                                                data.result.description +
                                            '</div> ' +
                                        '</div>' +
                                    '</div><div class="cat-read-more" style="display: none">Read More</div>';

                    $('.category-meta').html(categoryMeta);

                    setTimeout(function(){
                        $('.category-meta').find('.tag-description').fadeIn(function(){
                            if($('.tag-content-inner').outerHeight() > 92){
                                $('.cat-read-more').show();
                            }
                        });
                    }, 100)

                    // Update page meta data
                    document.title = data.result.meta_title;
                    $('meta[name=description]').attr('content',data.result.meta_desc).remove();

                    // Add the new meta information to the current state
                    window.history.replaceState({'single' : category}, data.result.meta_title, window.location.href);

                }
            }
        });
    };


    /*
     * Get the url variables and select the appropriate filters
     *
     */

    this.getUrlVars = function(){

        // Clear all search filters
        if($('.first-tag-load').length === 0 && $('.type-active').length === 0){
            $('.search-filters').find('input:checkbox').prop('checked', false);
        }

        if($('.type-active').length > 0){
            $('.type-active').removeClass('type-active');
        }

        /// Get url variables and check appropriate boxes
        window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
            if (key === 'level' || key === 'duration') {
                value = key + '-' + value
            }

            if(key === 'page'){
                that.options.page = value;
                $('.page-results-number').text(that.options.page);
            }

            if(key === 'order'){
                $('.sort select').get(0).selectedIndex = 1;
            }

            if (key !== 'query' && key.indexOf('utm_') === -1) {
                that.checkCategories(value);
            }

            if(key === 'query'){
                $('.search-page input[type=text]').val(value);
            }
        });
    };


    /*
     * Generate the pagination for the search
     *
     * @param {string} total - Number of pages
     * @param {number} page - Current page
     * @param {string} url - The url to add to the pagination buttons
     *
     */

    this.generatePagination = function(total, page, url){
        $('.js-pagination').pagination({
            items: total,
            itemsOnPage: this.options.courseCount,
            pages: Math.ceil(total / this.options.courseCount),
            cssStyle: 'light-theme',
            currentPage: page,
            hrefTextPrefix: url + '&page=',
            onPageClick: function (pageNumber, e) {
                e.preventDefault();

                that.options.updateUrl = true

                that.options.page = pageNumber;
                $('.page-results-number').text(pageNumber);

                that.callApi();
            }
        });

        return undefined;
    };


    /*
     * Insert ads into the blanks generated by the Course object
     *
     * @blanks {string} blanks - The blank course html
     *
     */

    this.insertAds = function(blanks) {

        var adFrequency = 6,
            enabled = true,
            ul = document.createElement('ul'),
            adIds = ['3285035941', '4311957408', '6335485514', '5960791435', '3242418311'],
            adCounter = 0;

        ul.innerHTML = blanks

        for (var i = 1; i <= ul.childNodes.length; i++) {

            var adNext = i % adFrequency === 0 && this.options.ads === true;

            if (adNext) {
                var html =  '<div class="ad course-block blank match-height" style="">' +
                                '<div>' +
                                    '<ins class="adsbygoogle" style="display:block" data-ad-format="fluid" data-ad-layout="image-top" data-ad-client="ca-pub-4877892089121284" data-ad-slot="'+adIds[adCounter]+'"></ins>' +
                                '</div>' +
                            '</div>'

                ul.childNodes[i-1].innerHTML = html;

                adCounter++;
            }
        }

        return ul
    };


    /*
     * Call API
     *
     */

    this.callApi = function(){

        var query = '',
            url = ''

        // If Learning path section is active
        if($('.learning-path-active').length > 0){
            query = this.createLPQuery();
            url = '/learning-path/list/' + query;

            // Make sure url stays at /learning-path
            this.options.updateUrl = false;
        }
        else{
            query = this.createCourseQuery();
            url = '/search?page=' + this.options.page + '&'+ url +'locale=' + language + '&size=' + this.options.courseCount + query;
        }

        $.ajax({
            url: $('#search').attr('data-endpoint') + url,
            type: 'GET',
            contentType: 'application/json',
            success: function (response) {

                $(window).scrollTop(0);

                // If no results exist then hide contents and show no results text
                if (typeof response.result === 'undefined' || response.result === null) {
                    $('.search-items').html('');
                    $('.category-meta').hide();
                    $('.no-results').fadeIn();
                    $('.js-pagination').fadeOut();
                }
                else {
                    $('.no-results').fadeOut();
                    $('.js-pagination').fadeIn();
                }

                // Check to see if blank courses exist and add if don't
                if($('.blank:not(.ad)').length === 0 && response.total !== 0){
                    var blanks = course.createBlanks(response.result.length < that.options.courseCount ? response.result.length : that.options.blankCount),
                        node = that.insertAds(blanks);

                    $('.search-items').html(node.innerHTML);
                }

                if (response.status === 200) {
                    if(response.total !== 0){
                        that.loopCourseResults(response.result, '.search-items');
                    }

                    // Check to see is results are low enough to show related courses
                    if(typeof response.related !== 'undefined' && response.total < 6){
                        var blanks = course.createBlanks(30),
                            node = that.insertAds(blanks);

                        $('.related-search-list').html(node.innerHTML).parent().show();

                        that.loopCourseResults(response.related, '.related-search-list');
                    }
                    else{
                        $('.related-search').hide().find('.related-search-list').html('');
                    }
                }

                // Create Pagination
                that.generatePagination(response.total, that.options.page, location.protocol + '//' + location.host + location.pathname +'/'+ url);
            }
        });
    };


    /*
     * Loop the reponse and create the course items and initalise the ads
     *
     * @param {JSON} response - Response from API
     *
     */

    this.loopCourseResults = function(response, container){

        // Loop through and create course item and replace the blank
        for (var x = 0; x < response.length; x++) {

            var courseItem = course.buildCourseItem(response[x]), // Create new course item
                blank = $(container).find('.blank:not(.ad)').first().parent();  // Get next blank to be replace with course

            // Add course
            blank.replaceWith(courseItem);

            (function () {
                var course = courseItem;
                setTimeout(function(){
                    course.style.opacity = 1;
                }, 200);
            })(courseItem)


            var nextAd = $(courseItem).next().find('.ad');
            if($(courseItem).next().find('.ad').length > 0){
                nextAd.removeClass('blank');
                (adsbygoogle = window.adsbygoogle || []).push({});
            }
        }

        $('.blank').parent().remove();
    };


    // Initialise Search
    this.init();
}

/*
 * Search Helper Classes
 *
 * removeURLParameter() - Remove a url Param from a given url
 * stateExists() - Check if a history state exists
 *
 */

/*
 * Remove a url Param from a given url
 *
 * @param {string} url - Url
 * @param {string} parameter - Parameter you want to remove
 *
 */

function removeURLParameter(url, parameter) {
    //prefer to use l.search if you have a location/link object
    var urlparts = url.split('?');

    if (urlparts.length >= 2) {
        var prefix= encodeURIComponent(parameter)+'=';
        var pars= urlparts[1].split(/[&;]/g);

        //reverse iteration as may be destructive
        for (var i= pars.length; i-- > 0;) {
            //idiom for string.startsWith
            if (pars[i].lastIndexOf(prefix, 0) !== -1) {
                pars.splice(i, 1);
            }
        }

        url = urlparts[0] + (pars.length > 0 ? '' + pars.join('&') : "");
        return url;
    }
    else {
        return url;
    }
}

/*
 * Check if a history state exists
 *
 * @param {string} name
 *
 */

function stateExists(name){
    return window.history.state !== null && typeof window.history.state[name] !== 'undefined' && window.history.state[name] === true;
}