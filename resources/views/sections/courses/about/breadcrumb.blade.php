<div class="wrapper breadcrumb-wrapper" style="margin-left: 240px;">
    <ol class="breadcrumb ">
        <li>
            <i class="icon-home"></i>
            <a href="{{route("home")}}" title="Alison Homepage">Home</a>
        </li>
        <i class="icon-right-arrow"></i>
        <li>
            <a href="{{route('courses')}}" title="Course">Course</a>
        </li>
        <i class="icon-right-arrow"></i>
        <li>
            <span>{{$course[0]->name}}</span>
        </li>
    </ol>
</div>
