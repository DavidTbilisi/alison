<ul class="my-courses-filter" data-toggle="modal" data-target="#mymodal">
    <li><a href="#"> <i class="fas fa-volume-up"></i> </a></li>
    <li><a href="#"> <i class="fas fa-video"></i> </a></li>
    <li><a href="#"> <i class="fas fa-file"></i> </a></li>
    <li><p> მასალა </p></li>
</ul>
{{-- რესურსების ფაილი --}}

<div class="modal fade" id="mymodal">
    <div class="modal-dialog mymodal">
        <div class="modal-header">
            <p class="text-right">
                <span data-dismiss="modal" class="pointer icon study-error"></span>
            </p>
        </div>
        <div class="modal-body">
            <div class="uploaded-list mCustomScrollbar scrollbar ">
                <h1>კურსის მასალა</h1>
                <form action="{{route('addres')}}" method="post" enctype="multipart/form-data">
                    <input type="text" placeholder="სათაური" name="name">
                    <input type="text" placeholder="აღწერა" name="desc">
                    @csrf
                    <input type="file" id="upload" name="file">
                    <label for="upload">ატვირთვა</label>
                    <input class="pointer" type="submit" name="submit" value="დამატება">
                </form>
                <table>
                    <thead>
                    <tr>
                        <td>ატვირთვის თარიღი</td>
                        <td>სათაური</td>
                        <td>მოკლე აღწერა</td>
                        <td>მოქმედება</td>
                    </tr>
                    </thead>
                    <tbody>
                    @if($resources)
                    @foreach($resources as $index=>$value)
                        <tr>
                            <td>{{$value->created_at}}</td>
                            <td class="name">{{$value->name}}</td>
                            <td class="desc">{{$value->desc}}</td>
                            @if(strpos($value->type, 'mage'))
                                <td hidden data-type="{{$value->type}}">
                                    <img src="{{$value->res_link}}" alt="{{$value->res_link}}">
                                </td>
                            @elseif(strpos($value->type, 'udio'))
                                <td hidden data-type="{{$value->type}}">
                                    <audio controls>
                                        <source src="{{$value->res_link}}" type="{{$value->type}}">
                                    </audio>
                                </td>
                            @elseif(strpos($value->type, 'idio'))
                                <td hidden data-type="{{$value->type}}">
                                    <video controls>
                                        <source src="{{$value->res_link}}" type="{{$value->type}}">
                                    </video>
                                </td>
                                @else
                                <td hidden data-type="{{$value->type}}">
                                    link:{{$value->res_link}} type:{{$value->res_link}}
                                </td>
                            @endif
                            <td class="space-around">
                                <span title='ჩასმა' class="pointer icon study-paste"></span>
                                <span title='შეცვლა' data-id="{{$value->id}}" class="pointer icon study-edit"></span>
                                <span title='წაშლა' data-id="{{$value->id}}" class="pointer icon study-trash" onclick="deleteRes({{$value->id}})"></span>
                            </td>
                        </tr>
                    @endforeach
                    @endif
                    </tbody>
                </table>
            </div>
        </div>
        <div class="modal-footer">

        </div>
    </div>
</div>
