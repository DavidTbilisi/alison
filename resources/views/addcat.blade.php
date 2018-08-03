
<div class="containter">
    <div class="row">
        <form action="{{route('addCategory')}}" method="post">

            <div class="col-sm-4">
                <label for="name">name</label>
                <input type="text" id="name" name="name" placeholder="name">
            </div>


            <div class="col-sm-4">
                <label for="parent">parent</label>
                <input type="number" id="parent" name="parent" placeholder="parent">
            </div>


            <div class="col-sm-4">
                <input type="submit" name="submit">
            </div>

        </form>
    </div>
</div>

