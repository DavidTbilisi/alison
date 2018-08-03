@extends('layouts.main')
@section('nav')
    <!--nav-->
    @include('sections.admin.loggedin.nav')
    <!--navend-->
@endsection

@section('courses')
    <!--courses inner-->
    @include('sections.admin.user.coursesInner.inner')
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


