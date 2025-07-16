<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('HomePage');
    }

    public function cart()
    {
        return Inertia::render('CartPage');
    }

    public function checkout()
    {
        return Inertia::render('CheckoutPage');
    }

    public function search()
    {
        return Inertia::render('SearchPage');
    }
    public function profile()
    {
        return Inertia::render('ProfilePage');
    }
}
