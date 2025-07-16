<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HDManagerController extends Controller
{
    public function index()
    {
        return Inertia::render('HDManagerLogin');
    }


}
