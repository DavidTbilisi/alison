{{--@dump($oneC)--}}
{{--@dump($active)--}}
<div id="player-page">
    {{--<div class="player-page-bg"></div>--}}
    {{--<div class="wrapper breadcrumb-wrapper">--}}
{{--        @include('sections.admin.user.coursesInner.breadcrumb')--}}
    {{--</div>--}}

    <div class="player-page-wrapper wrapper ">
        <form action="{{route("editlesson",['course_id,' => 5,'id' => request('id')])}}" method="post">

        <h1>
{{-- თითო გაკვეთილის შიგთავსი --}}
            <span class="icon-courses"></span>

            <input type="text" name="title" value="{{!$hasCurses? "": $oneC[$active]->title}}">
        </h1>
            <div class="player-holder">

                    {{-- გაკვეთილის ტექსტი --}}
                    <textarea class="tinymce"
                              name="text"
                              id="lesson">{{!$hasCurses? "": $oneC[$active]->text}}
                    </textarea>

{{-- todo: გაკვეთილები არ არის დამოკიდებული კურსზე --}}
                    {{ csrf_field() }}

                    <input class="btn btn-green course-topic-add"
                           type="submit"
                           value="დამახსოვრება">

            </div>
        </form>
        {{--მარჯვენა ნავიგაცია გაკვეთილებში --}}
        @include('sections.admin.user.coursesInner.course-navigation')
        @include('sections.admin.user.coursesInner.upload-files') {{--რესურსების გვერდი--}}

    </div>
</div>