<?php

namespace App\Http\Controllers\Api;

use App\Models\Comic;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ComicController extends Controller
{
    public function index() {
        $comics = Comic::all();

if(  $comics->count() > 0) {

    $data = [
        'status' => 200,
        'comics' => $comics,
    ];
    return response()->json($data, 200);
}else {
    $data = [
        'status' => 404,
        'comics' => 'Data does not exist',
    ];
    return response()->json($data, 404);
}

         }
}
