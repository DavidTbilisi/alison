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
                <form action="{{route('addlesson')}}" method="post" enctype="multipart/form-data">
                    <input type="text" placeholder="სათაური" name="name">
                    <input type="text" placeholder="აღწერა" name="desc">
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
                    @foreach($resources as $index=>$value)
                        <tr>
                            <td>{{$value->created_at}}</td>
                            <td>{{$value->name}}</td>
                            <td>{{$value->desc}}</td>
                            <td class="space-around">
                                <span title='ჩასმა' class="pointer icon study-paste"></span>
                                <span title='შეცვლა' class="pointer icon study-edit"></span>
                                <span title='წაშლა' class="pointer icon study-trash"></span>
                            </td>
                        </tr>
                    @endforeach
                    </tbody>
                </table>
            </div>
        </div>
        <div class="modal-footer">

        </div>
    </div>
</div>
