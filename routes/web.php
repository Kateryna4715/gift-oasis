<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Landing/Landing', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
// Route::view('/{path?}', 'app');

Route::get('/', function () {
    return Inertia::render('Landing/Landing');
});

Route::get('/constructor', function () {
    return Inertia::render('Constructor/Constructor');
});

Route::get('/bestsellers', function () {
    return Inertia::render('Bestsellers/Bestsellers');
});

Route::get('/mystery', function () {
    return Inertia::render('Mystery/Mystery');
});

Route::get('/about', function () {
    return Inertia::render('About/About');
});

Route::get('/auth', function () {
    return Inertia::render('Auth/Auth');
});
Route::get('/register', function () {
    return Inertia::render('Auth/Register');
});
Route::get('/login', function () {
    return Inertia::render('Auth/Login');
});

Route::post('/unauthorder', [App\Http\Controllers\Api\UnauthOrderController::class, 'store']);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
