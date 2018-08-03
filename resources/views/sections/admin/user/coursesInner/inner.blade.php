<div id="player-page">
    {{--<div class="player-page-bg"></div>--}}
    {{--<div class="wrapper breadcrumb-wrapper">--}}
{{--        @include('sections.admin.user.coursesInner.breadcrumb')--}}
    {{--</div>--}}

    <div class="player-page-wrapper wrapper ">
        <h1>
            <span class="icon-courses"></span>
            <input type="text" value="{{$oneC[$arrId]->title}}">
            {{-- გაკვეთილის სათაური --}}
        </h1>
        <div class="player-holder">
            <form action="{{route('addlesson')}}" method="post">
                {{-- გაკვეთილის ტექსტი --}}
                <textarea class="tinymce"
                          name="lesson"
                          id="lesson">{{$oneC[$arrId]->text}}
                </textarea>

                {{ csrf_field() }}

                <input class="btn btn-green course-topic-add"
                       type="submit"
                       value="დამახსოვრება">
            </form>
        </div>
        {{--მარჯვენა ნავიგაცია გაკვეთილებში --}}
        @include('sections.admin.user.coursesInner.course-navigation')
        @include('sections.admin.user.coursesInner.upload-files') {{--რესურსების გვერდი--}}

    </div>
</div>