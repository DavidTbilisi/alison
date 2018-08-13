<div class="courses-wrapper">

    <button><a class="btn btn-blue" href="{{route('addcourse')}}">კურსის დამატება</a></button>

    <table>
        <thead>
        <tr>
            <th> # </th>
            <th> id </th>
            <th> სურათი </th>
            <th> სათაური </th>
            <th style="text-align: center">გაკვეთილები</th>
            <th style="text-align: center">კონფიგურაცია</th>
            <th style="text-align: center">წაშლა</th>
        </tr>
        </thead>
        <tbody>
        @foreach($scourses as $i=>$scours)
            <tr>
                <td>{{++$i}}</td>
                <td>{{$scours->id}}</td>
                @if(!strpos($scours->courseImgUrl,'ttp'))
                    <td class="courses-back"
                        style="background-image: url('{{asset('images/'.$scours->courseImgUrl)}}');">
                    @else
                    <td class="courses-back" style="background-image: url('{{$scours->courseImgUrl}}');">
                    @endif
                </td>
                <td><p>{{$scours->name}}</p></td>

                {{--**************** გაკვეთილების რაოდენობა კურსში ****************--}}
                <td>
                    <a href="{{route('lesson',[$scours->id])}}"
                            class="btn btn-green">
                            გაკვეთილები
                        ({{count($oneC[--$i])}})
                    </a>
                </td>


                <td><a class="btn btn-blue" href="{{route('edit',$scours->id )}}">კონფიგურაცია</a></td>
                <td><a class="deleteCourse  btn btn-danger" data-course-id="$scours->id" href="#">წაშლა</a></td>
            </tr>
        @endforeach
        </tbody>
    </table>
</div>

