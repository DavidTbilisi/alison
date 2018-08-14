@if (Session::has('success'))
    <div class="alert alert-success">
        <ul>
            <li>{!! Session::get('success') !!}</li>
        </ul>
    </div>
@endif


<section class="add-course-wrapper">
    <form action="{{route('edit',['id' => request('id')])}}" enctype="multipart/form-data" method="post">

        <div class="row">
            <div class="col-sm-4">
                <div class="add-course-image">
                    <label class="upload-label" for="file"><p>ატვირთეთ კურსის სურათი</p>
                        @if(strpos($scourse[0]->courseImgUrl,'ttp'))
                            <img width="300" src="{{$scourse[0]->courseImgUrl}}" alt="{{$scourse[0]->courseImgUrl}}">
                        @else
                            <img width="300" src="{{asset('images/'. $scourse[0]->courseImgUrl)}}" alt="{{$scourse[0]->courseImgUrl}}">
                        @endif
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
                            @php $categories = explode(',',$scourse[0]->category_name) @endphp
                            @if(in_array($option->id, $categories))
                                    <input type="checkbox"
                                           id="cat{{$option->id}}"
                                           value="{{ $option->id }}"
                                           name="choose_category[]"
                                           checked>
                                    <label for="cat{{$option->id}}">{{ $option->title }}</label>
                                @continue;
                                @endif
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
{{---------------------------------------------------------------}}
            <div class="col-sm-4">
                <div class="choose_type">
                    <p>აირჩიეთ ტიპი</p>
                    <select name="choose_type" id="choose_type" >
                        <option value="">...</option>
    @foreach(['დიპლომი',"სერტიფიკატი"] as $index=>$option)
        @if($index == $scourse[0]->course_type_id)
            <option value="{{$index}}" selected>{{$option}}</option>
        @else
            <option value="{{$index}}">{{$option}}</option>
        @endif
    @endforeach
                    </select>
                </div>

                <div class="for-time">
                    <label for="fortime"> ხანგრძლივობა დღეებში </label>
                    <input type="number" name="fortime" id="fortime" min="0" max="200" placeholder="0" value="{{(int)$scourse[0]->avg_duration}}">
                </div>
                {{-- todo: connect with db --}}
                <div class="price-money">
                    <label for="payfor"> ფასი </label>
                    <input type="number" name="payfor" id="payfor" min="0" max="500" placeholder="0" value="{{(int)$scourse[0]->price}}">
                </div>
            </div>
        </div>

        <div class="add-course-title">
            <p>კურსის სათაური </p>
            <input name="courseTitle" type="text" value="{{$scourse[0]->name}}">
        </div>

        <div class="add-course-description">
            <p>კურსის აღწერა </p>
            <textarea name="courseDesc" class="tinymce">{{$scourse[0]->description}}</textarea>
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