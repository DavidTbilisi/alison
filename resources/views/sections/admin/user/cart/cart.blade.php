<div class="cart-d">
    <div class="cart-d-title">
        <h2>კალათა ({{count($data)}})</h2>
    </div>
    <div class="cart-d-table">
        <table>
            <thead>
            <tr>
                <td>კურსის დასახელება</td>
                <td>გამოყენების პერიოდი</td>
                <td>ფასი</td>
                <td>კალათიდან წაშლა</td>

            </tr>
            </thead>
            <tbody>
            @foreach ($data as $row)
            <tr>
                <td>{{$row->name}}</td>
                <td>{{$row->avg_duration}} დღე</td>
                <td>{{$row->price}} ლარი</td>
                <td> delete </td>
            </tr>
                @endforeach

            </tbody>
        </table>
    </div>

</div>