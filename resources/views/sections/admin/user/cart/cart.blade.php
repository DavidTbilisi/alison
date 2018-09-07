<div class="cart-d">
    <div class="cart-d-title">
        <h2>
            <span class="icon study-cart-dark"></span>
            <span>კალათა ({{count($data)}})</span>
        </h2>
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
            @php($whole_price = 0)

            {{--just console.log javascript--}}
            @inject('clog', "App\Helpers\BrowserConsole")
            @php( $clog->log($data, 'view gets this data') )

            @foreach ($data as $index=>$row)

                <tr>
                    @php($whole_price += (int)$row->price)
                    <td>{{++$index}}</td>
                    <td>{{$row->name}}</td>
                    <td>{{(int)$row->avg_duration}} დღე</td>
                    <td>{{(int)$row->price}} ლარი</td>
                    <td><a href="{{route('remove',['id' => $row->id]) }}">
                            delete
                            <img src="{{asset('css/fonts/remove.svg')}}" alt="remove">
                        </a>
                    </td>
                </tr>
            @endforeach
            <tr>
                <td>სულ</td>
                <td></td>
                <td></td>
                <td> {{$whole_price}} ლარი </td>
                <td></td>
            </tr>
            </tbody>
        </table>
    </div>

    <div class="buy-btn">
        <h4 class="whole_price">{{$whole_price}} ლარი</h4>
        <a href="#" class="btn btn-large btn-blue">ყიდვა
            <span class="icon study-cart-white"></span>
        </a>
    </div>
<div class="go-back">
    {{--should be changed--}}
    {{--todo: link not working correctly--}}
    <a href="{{url()->previous()}}"> წინა გვერდი </a>
</div>
</div>