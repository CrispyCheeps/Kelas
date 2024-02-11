<?php

namespace App\Http\Controllers;

use App\Models\Idea;
use Illuminate\Http\Request;

class IdeaController extends Controller
{
    public function show(Idea $idea){
        return view("ideas.show", compact("idea"));
    }
    public function store(){
        // dump($_POST);
        dump();

        // $idea = new Idea([
        //     "content" => request()->get("idea",""),  
        // ]);
        // $idea->save();
        
        //Validasi panjang karakter konten supaya tdk null yg di post
        request()->validate([
            "content" => "required|min:3|max:240"
        ]);

        $idea = Idea::create(
            [
                'content' => request()->get('content',''),
            ]
        );

        return redirect()->route("dashboard")->with("success","Idea created successfully!");
    }

    public function destroy(Idea $id){
        // $idea = Idea::where("id",$id)->firstOrFail();

        // $idea->delete();

        //OR u can write it like this
        // Idea::where("id",$id)->firstOrFail()->delete();
        
        //OR u can write it like this, but with the route model binding in the parameter
        $id->delete();
        return redirect()->route("dashboard")->with("success","Idea deleted successfully!");
    }

    public function edit(Idea $idea){
        $editing = true;
        return view("ideas.show", compact("idea","editing"));
    }

    public function update(Idea $idea){
        request()->validate([
            "content" => "required|min:3|max:240"
        ]);

        $idea->content = request()->get("content", "");
        $idea->save();

        return redirect()->route("ideas.show", $idea->id)->with("success", "Idea updated successfully!");
    }
}
