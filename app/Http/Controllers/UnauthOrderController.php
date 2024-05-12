<?php

namespace App\Http\Controllers;
use App\Models\Unauth_order;

use Illuminate\Http\Request;

class UnauthOrderController extends Controller
{
   
        /**
         * Display the registration view.
         */
        public function create(): Response
        {
            return Inertia::render('Auth/Register');
        }
    
        /**
         * Handle an incoming registration request.
         *
         * @throws \Illuminate\Validation\ValidationException
         */
        public function store(Request $request): RedirectResponse
        {
            $request->validate([
                'fullname' => 'required|string|max:255|min:3|regex:/^[a-zA-Z ]+$/',
                'email' => 'required|string|lowercase|email:rfc|max:255|unique:'.User::class,
                'phone' => 'required|min:10|numeric',
                'city' => 'required|string|max:32',
            ]);
    
            $unauth_order = Unauth_order::create([
                'fullname' => $request->input('fullname'),
                'email' => $request->input('email'),
                'phone' => $request->input('phone'),
                'city' => $request->input('city'),
                'payment' => $request->input('payment'),
                'wrapper' => $request->input('wrapper'),
                'comic' => $request->input('comic'),
                'sweet' => $request->input('sweet'),
    
                
            ]);
    
            event(new Registered($unauth_order));
        }
}


