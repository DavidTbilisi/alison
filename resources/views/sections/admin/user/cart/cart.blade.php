<div class="cart-d">
    <div class="cart-d-title">
        <h2>კალათა ({{count($data)}})</h2>
    </div>
    <div class="cart-d-table">
        <table>
            <thead>
            <tr>
                <td>#</td>
                <td>კურსის დასახელება</td>
                <td>გამოყენების პერიოდი</td>
                <td>ფასი</td>
                <td>კალათიდან წაშლა</td>

            </tr>
            </thead>
            <tbody>
            @foreach ($data as $index=>$row)
            <tr>
                <td>{{++$index}}</td>
                <td>{{$row->name}}</td>
                <td>{{(int)$row->avg_duration}} დღე</td>
                <td>{{(int)$row->price}} ლარი</td>
                <td><a href="{{route('remove',['id' => $row->course_id]) }}">delete</a> </td>
            </tr>
                @endforeach

            </tbody>
        </table>
    </div>

</div>