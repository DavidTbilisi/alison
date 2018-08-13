<div class="course-navigation">
    <a href="#" class="nav-trigger up-arrow-morph trigger">Topic Menu</a>
    <div class="module-topics slideToggle scrollbar mCustomScrollbar">
        <p class="topics_heading">გაკვეთილები</p>
        {{--<a href="#"class="prev-next"><span class="icon-left-arrow"></span> Previous Topic </a>--}}
        @if (!$hasCurses)
            <p class="topics_heading"> დაამატე გაკვეთილები </p>
        @else
        <ol>

            {{-- გაკვეთილების ჩამონათვალი --}}
            @foreach($oneC as $index => $one)
                {{-- რომელი გაკვეთილია გახსნილი --}}
                @if($index == $active)
                    <li class="active">
                        <a href="{{route('lesson', ['course_id' => $one->course_id, 'id' => $index])}}">{{$one->title}}</a>
                        <span title="წაშლა" class="pointer deleteLesson icon study-error"></span>
                    </li>
                    @continue
                @endif
                <li>
                    <a href="{{route('lesson', ['course_id' => $one->course_id,'id' => $index])}}">{{$one->title}}</a>
                    <span title="წაშლა" class="pointer deleteLesson icon study-error"></span>
                </li>
            @endforeach
        </ol>
        @endif
        {{--<a href="#" class="prev-next"><span class="icon-right-arrow"></span> Next Topic</a>--}}
        <form action="{{route('addlesson')}}" method="post">
        <input  type="text" placeholder="ჩაწერეთ გაკვეთილის სახელი" name="title">
            @csrf
            <input type="submit"  class="back-to-modules btn btn-green" value="დამატება">
        </form>

        {{-- todo: connect this page with DB --}}
    </div>
</div>


