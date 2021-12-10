<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cat;
class CatController extends Controller
{
    public function getAll(){
        $data = Cat::get();
        return response()->json($data, 200);
      }
  
      public function create(Request $request){
        $data['name'] = $request['name'];
        $data['breed'] = $request['breed'];
        $data['description'] = $request['description'];
        Cat::create($data);
        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);
      }
  
      public function delete($id){
        $res = Cat::find($id)->delete();
        return response()->json([
            'message' => "Successfully deleted",
            'success' => true
        ], 200);
      }
  
      public function get($id){
        $data = Cat::find($id);
        return response()->json($data, 200);
      }
  
      public function update(Request $request,$id){
        $data['name'] = $request['name'];
        $data['breed'] = $request['breed'];
        $data['description'] = $request['description'];
        Cat::find($id)->update($data);
        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ], 200);
      }
}
 