
@extends('layouts.main')
@section('nav')
    <!--nav-->
    @include('sections.incs.nav')
    <!--navend-->
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


