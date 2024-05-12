<?php

namespace App\Http\Controllers\Api;

use App\Models\Sweet;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SweetController extends Controller
{
    public function index() {
        $sweets = Sweet::all();

if(  $sweets->count() > 0) {

    $data = [
        'status' => 200,
        'sweets' => $sweets,
    ];
    return response()->json($data, 200);
}else {
    $data = [
        'status' => 404,
        'sweets' => 'Data does not exist',
    ];
    return response()->json($data, 404);
}

         }
}
