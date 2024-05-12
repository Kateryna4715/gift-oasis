<?php

namespace App\Http\Controllers\Api;

use App\Models\Bestseller;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BestsellerController extends Controller
{
    public function index() {
        $bestsellers = Bestseller::all();

if(  $bestsellers->count() > 0) {

    $data = [
        'status' => 200,
        'bestsellers' => $bestsellers,
    ];
    return response()->json($data, 200);
}else {
    $data = [
        'status' => 404,
        'bestsellers' => 'Data does not exist',
    ];
    return response()->json($data, 404);
}

         }
}
