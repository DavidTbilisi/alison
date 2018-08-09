@if (Session::has('success'))
    <div class="alert alert-success">
        <ul>
            <li>{!! Session::get('success') !!}</li>
        </ul>
    </div>
@endif
<section class="add-course-wrapper">
    <form action="{{route('addcourse')}}" enctype="multipart/form-data" method="post">

        <div class="row">
            <div class="col-sm-4">
                <div class="add-course-image">
                    <label class="upload-label" for="file"> <p>ატვირთეთ კურსის სურათი</p>
                        <img width="30" src="https://image.flaticon.com/icons/svg/263/263116.svg" alt="">
                    </label>
                    <input id="file"
                           name="courseCover"
                           type="file"
                           value="{{old("courseCover")}}">
                    {{csrf_field()}}
                </div>
            </div>

            {{----------------------------------------------------------}}
            <div class="col-sm-4">
                <div class="choose_category">
                    <p>აირჩიეთ კატეგორია</p>

                    <ul class="scrollbar mCustomScrollbar">
                        @foreach($all['allCats'] as $index=>$option)
                            <li>
                                @if($option->root_id === 0)
                                    @continue;
                                @else
                                    <input type="checkbox"
                                           id="cat{{$option->id}}"
                                           value="{{ $option->id }}"
                                           name="choose_category[]">
                                    <label for="cat{{$option->id}}">{{ $option->title }}</label>
                                @endif
                            </li>
                        @endforeach
                    </ul>
                    <script>
                        setTimeout(go,1e3);
                        function go () {
                            function clicked(e) {
                                console.log( 'checkbox Checked?:', $(this).is(":checked") )
                            }
                            $("li [type=checkbox]").click(clicked)
                        }
                    </script>
                </div>
            </div>
            {{--todo: აქ კატეგორიებთან არსი რაღაც პრობლემა --}}
            {{---------------------------------------------------------------}}
            <div class="col-sm-4">
                <div class="choose_type">
                    <p>აირჩიეთ ტიპი</p>
                    <select name="choose_type" id="choose_type" >
                        <option value="">...</option>
                    @foreach(['დიპლომი',"სერტიფიკატი"] as $index=>$option)
                            <option value="{{++$index}}">{{$option}}</option>
                        @endforeach
                    </select>
                </div>

                <div class="for-time">
                    <label for="fortime"> ხანგრძლივობა დღეებში </label>
                    <input type="number" name="fortime" id="fortime" min="0" max="200" placeholder="0" >
                </div>

                <div class="price-money">
                    <label for="payfor"> ფასი </label>
                    <input type="number" name="payfor" id="payfor" min="0" max="500" placeholder="0" >
                </div>
            </div>
        </div>

        <div class="add-course-title">
            <p>კურსის სათაური </p>
            <input name="courseTitle" type="text" value="{{old("courseTitle")}}">
        </div>

        <div class="add-course-description">
            <p>კურსის აღწერა </p>
            <textarea name="courseDesc" class="tinymce">{{old("courseDesc")}}</textarea>
        </div>

        <input type="submit" value="დამახსოვრება">

    </form>

    @if (count($errors) > 0)
        <div class="alert alert-danger" onclick="this.style.display = 'none'">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>- {{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif

</section>