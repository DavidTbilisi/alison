
@extends('layouts.main')
@section('nav')
    <!--nav-->
    @include('sections.incs.nav')
    <!--navend-->
@endsection

@section('courses')
    <!--courses-->
    <div id="search-holder">
        <div id="search" data-endpoint="{{url('/')}}" data-ads-enabled=" false ">
            <div class="wrapper">
                @include ('sections.courses.intros')
                <div class="search-tab">
                    @include ("sections.courses.search-filters")
                    @include ("sections.courses.search-result")
                </div>
            </div>
        </div>
    </div>
    <!--coursesend-->
@endsection

@section('modal')
    <!--modal-->
    @include('sections.incs.modal')
    <!--modalend-->
@endsection

@section('footer-menu')
    <!--footer-menu-->
    @include('sections.incs.footer-menu')
    <!--footer-menuend-->
@endsection


