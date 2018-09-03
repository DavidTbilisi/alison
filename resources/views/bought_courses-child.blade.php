
@extends('layouts.main')
@section('nav')
    <!--nav-->
    @include('sections.incs.nav')
    <!--navend-->
@endsection


@section('courses')
    @include('sections.admin.user.bought_courses.bought_courses')
@endsection

@section('footer-menu')
    <!--footer-menu-->
    @include('sections.incs.footer-menu')
    <!--footer-menuend-->
@endsection

