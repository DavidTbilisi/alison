<div class="course-navigation">
    <a href="#" class="nav-trigger up-arrow-morph trigger">Topic Menu</a>
    <div class="module-topics slideToggle scrollbar mCustomScrollbar">
        <p class="topics_heading">გაკვეთილები</p>
        {{--<a href="#"class="prev-next"><span class="icon-left-arrow"></span> Previous Topic </a>--}}
        <ol>
            @foreach($oneC as $index => $one)
                @if($index == $arrId)
                    <li class="active">
                        <a href="{{$one->id}}">{{$one->title}}</a>
                        <span title="წაშლა" class="pointer ddel icon study-error"></span>
                    </li>
                    @continue
                @endif
                <li>
                    <a href="{{$one->id}}">{{$one->title}}</a>
                    <span title="წაშლა" class="pointer ddel icon study-error"></span>
                </li>
            @endforeach
        </ol>
        {{--<a href="#" class="prev-next"><span class="icon-right-arrow"></span> Next Topic</a>--}}
        <input  type="text" placeholder="ჩაწერეთ გაკვეთილის სახელი" name="title">
        <a class="back-to-modules btn btn-green" href="#">დამატება</a>
        {{-- todo: connect this page with DB --}}
    </div>
</div>


