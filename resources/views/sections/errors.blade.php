@if(count($errors)>0)
    <div title="დააკლიკეთ რომ გაქრეს" class="derrors" onclick="this.style.display = 'none'" style="top:10%">
        <div class="alert alert-danger" >
            <ul>
                @foreach($errors->all() as $index=>$error)
                    <li>{{$error}}</li>
                    {{session([$index=>$error])}}
                @endforeach
            </ul>
        </div>
    </div>
@endif