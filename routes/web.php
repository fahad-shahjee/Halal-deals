<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\HotelController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HDManagerController;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/cart', [HomeController::class, 'cart'])->name('cart');
Route::get('/checkout', [HomeController::class, 'checkout'])->name('checkout');
Route::get('/search', [HomeController::class, 'search'])->name('search');
Route::get('/product/detail', [ProductController::class, 'show'])->name('product.show');
Route::get('/hotel/detail', [HotelController::class, 'show'])->name('hotel.show');
Route::get('/profile', [HomeController::class, 'profile'])->name('profile');
Route::get('/hd-manager', [HDManagerController::class, 'index'])->name('hd-manager');

// Route::middleware(['auth', 'verified'])->group(function () {
//     Route::get('dashboard', function () {
//         return Inertia::render('dashboard');
//     })->name('dashboard');
// });

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
