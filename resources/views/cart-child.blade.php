
@extends('layouts.main')
@section('nav')
    <!--nav-->
    @include('sections.incs.nav')
    <!--navend-->
@endsection
@section('courses')
    @if($data < 1)
        @include('sections.admin.user.cart.cart-empty')
    @else
        @include('sections.admin.user.cart.cart')
    @endif
@endsection

@section('footer-menu')
    <!--footer-menu-->
    @include('sections.incs.footer-menu')
    <!--footer-menuend-->
@endsection

