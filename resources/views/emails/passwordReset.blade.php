<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>no matter</title>
</head>
<body>
<style>

    * {
        margin: 0;
        padding: 0;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    :root {
        font-size: 10px;
        --color1:#145868;
        --color2:#365d5c;
        --color3:#37727d;
        --color4:#8ba59a;
        --color5:#e9eadc;
    }

    html, body {
        font-size: 1.6rem;
    }

    .password-reset {
        width: 100%;
        text-align: center;
        line-height: 5rem;
    }

    .password-reset a {
        color: #252525;
        text-decoration: none;
        font-weight: bold;
    }

    .password-reset .logo {
        background: var(--color4);
        padding: 3rem;
        text-align: center;
    }

    .password-reset-text {
        width: 80%;
        margin: 1rem auto;
    }

    .password-reset-password {
        display: block;
        font-size: 3rem;
        background: lightgray;
    }
</style>

    <div class="password-reset">
        <div class="logo">
            <h1><a href="{{route('home')}}">{{strtoupper(  config('app.name') )}}</a></h1>
        </div>
        <div class="password-reset-text">
            <h1>გამარჯობა {{$name}}</h1>
            <p>დაგენერირებული პაროლი: <span class="password-reset-password">{{$pass}}</span> </p>
            <p>გამოიყენეთ დაგენერირებული პაროლი</p>
            <p> და შეცვალეთ ის თქვენი სურვილისამებრ</p>
            <a href="{{route('home')}}">{{config('app.name')}}</a>
        </div>
        <div class="password-reset-footer"></div>
    </div>
</body>
</html>