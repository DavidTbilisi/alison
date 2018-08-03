
@extends('layouts.main')
@section('nav')
    <!--nav-->
    {{--@foreach($all  as $i=>$one)--}}
    {{--<SCRIPT>console.log('{{$i}}:',{!! $one!!})</SCRIPT>--}}
    {{--@endforeach--}}

    {{--<SCRIPT>console.log(--}}
        {{--@php--}}
            {{--print_r( json_encode($all ))--}}
        {{--@endphp--}}
        {{--)</SCRIPT>--}}

    @include('sections.incs.nav')
    <!--navend-->
@endsection

@section('slider')
    <!--slider-->
    <div id="main-holder">
        <div class="outer-wrap modified-home">
            @include('sections.home.slider')
        </div>
    </div>
    <!--sliderend-->
@endsection

@section('courses')
    <!--courses-->
    @include('sections.home.courses')
    <!--coursesend-->
@endsection

@section('modal')
    <!--modal-->
    @include('sections.incs.modal')
    <!--modalend-->
@endsection

@section('counters')
    <!--counters-->
    @include('sections.home.counter')
    <!--countersend-->
@endsection

@section('testimonials')
    <!--testimonials-->
    @include('sections.home.testimonials')
    <!--testimonialsend-->
@endsection

@section('cta')
    <!--cta-->
    @include('sections.home.cta')
    <!--ctaend-->
@endsection

@section('footer-menu')
    <!--footer-menu-->
    @include('sections.incs.footer-menu')
    <!--footer-menuend-->
@endsection


