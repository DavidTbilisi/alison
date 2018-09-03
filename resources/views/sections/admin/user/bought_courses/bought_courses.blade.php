<div class="cart-d">
    <div class="cart-d-title">
        @php ($data = range(3,7))
        <h2>
            <span> ნაყიდი კურსები ({{count($data)}}) </span>
        </h2>
    </div>
    <div class="cart-d-table">
        <table>
            <thead>
            <tr>
                <td> კურსის დასახელება </td>
                <td> დაწყების თარიღი </td>
                <td> ხანგრძლივობა </td>
                <td> შეჩერება </td>
                <td> დასასრულის თარიღი </td>
                <td> სტატუსი </td>

            </tr>
            </thead>
            <tbody>
            @php($whole_price = 0)
            @foreach ($data as $index=>$row)
                <tr>
                    @php($whole_price += (int)$row)
                    <td>{{(int)$row}} დღე</td>
                    <td>{{(int)$row}} ლარი</td>
                    <td>{{(int)$row}}</td>
                    <td>{{(int)$row}}</td>
                    <td>{{(int)$row}}</td>
                    <td>{{(int)$row}}</td>
                </tr>
            @endforeach

            </tbody>
        </table>
    </div>

    <div class="go-back">
        {{--@dd(url())--}}
        <a href="{{url()->previous()}}"> წინა გვერდი </a>
    </div>
</div>