<?php

use App\Http\Controllers\AnonMessage;
use Illuminate\Support\Facades\Route;

Route::get('/', [AnonMessage::class, 'index'])->name('home');
Route::get('/kirim-pesan', [AnonMessage::class, 'create'])->name('message.create');
Route::get('/cek-pesan', [AnonMessage::class, 'getMessage'])->name('message.getMessage');


// Routes for Handling Message Request
Route::post('/message', [AnonMessage::class, 'store'])->name('message.store');
Route::get('/message', [AnonMessage::class, 'search'])->name('message.search');

require __DIR__ . '/auth.php';
