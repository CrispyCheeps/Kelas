<?php

namespace App\Http\Controllers;

use App\Models\Idea;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index(){

    //     $users = [
    //         [
    //             "name"=> "Alex",
    //             "age" => 30,
    //         ],
    //         [
    //             "name" => "dan",
    //             "age" => 25,
    //         ],
    //         [
    //             "name"=> "John",
    //             "age"=> 15,
    //         ]
    //         ];
    //     return view("dashboard",
    // [
    //     "users"=> $users
    // ]);

    
        // $idea = new Idea();
        // $idea->content = "test";
        // $idea->likes = 0;
        // $idea->save();
    

        // dump(Idea::all());

        return view("dashboard", [
            "ideas" => Idea::orderBy('created_at', 'desc')->paginate(5),
        ]);
    }
}
