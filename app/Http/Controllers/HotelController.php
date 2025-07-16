<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HotelController extends Controller
{
    public function show()
    {
        return Inertia::render('HotelDetailPage');
    }
}
