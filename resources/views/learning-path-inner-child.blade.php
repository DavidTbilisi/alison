
@extends('layouts.main')
@section('nav')
    <!--nav-->
     @include('sections.incs.nav')
    <!--navend-->
@endsection


@section('courses')
    <!--courses-->
    @include('sections.learning-path.learning-path-inner')
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


