<?php

namespace App\Http\Controllers\Api;

use App\Models\Wrapper;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class WrapperController extends Controller
{
    public function index() {
        $wrappers = Wrapper::all();

if(  $wrappers->count() > 0) {

    $data = [
        'status' => 200,
        'wrappers' => $wrappers,
    ];
    return response()->json($data, 200);
}else {
    $data = [
        'status' => 404,
        'wrappers' => 'Data does not exist',
    ];
    return response()->json($data, 404);
}

         }
}
